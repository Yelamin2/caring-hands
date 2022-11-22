from dj_rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import  Messages, AbstractUser, Invoice
from rest_framework.authtoken.models import Token
from visits.models import VisitLog
# from mail_send import Mail


User = get_user_model()

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields = ('id', 'username', 'company_name', 'address1', 'address2', 'city', 'state','zip')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'address1', 'address2', 'city', 'state','zip')


class MessagesSerializer(serializers.ModelSerializer):
    client_details = ClientSerializer(source='client', read_only=True)
    class Meta:
        model = Messages
        fields= '__all__'


class InvoiceSerializer(serializers.ModelSerializer):
    hours = serializers.SerializerMethodField()
    # client_details = ClientSerializer(source='client', read_only=True)
    # client_details = serializers.SerializerMethodField()
    # user_details= CompanySerializer(source='', read_only=True )
    
    class Meta:
        model= User
        fields= ('id','username','hours')

    # def get_client_details(self, obj):
    #     client_id = self.context['client_id']
    #     client = User.objects.get(id=client_id)
    #     return client


    def get_hours(self, obj):
        
        client_id = self.context['client_id']
        provider_id = self.context['provider_id']
        timesheets = VisitLog.objects.filter(client=client_id, user=provider_id)
        
        billable_hours = 0
        for timesheet in timesheets:
            start_time = timesheet.start_visit
            end_time = timesheet.end_visit
            tdelta = end_time - start_time
            billable_hours = billable_hours + tdelta.total_seconds() / 3600

        return billable_hours

    # Mail(
    #     from_email='yelamin2@gmail.com',
    #     to_emails='yelamin2@yahoo.com',
    #     subject='Your invoice is ready ',
    #     html_content='<strong>Your invoice is ready. Your total billable hours are [billable_hours]</strong>')
   


