from dj_rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import  Timesheet, AbstractUser, VisitLog
from rest_framework.authtoken.models import Token


User = get_user_model()
# class PersonCompanyDaySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = PersonCompanyDay

#         fields= '__all__'
        
#         # read_only_fields = ('id','username')

# class WeekdaySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = PersonCompanyDay
#         fields='__all__'
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields = ('id', 'username', 'company_name', 'address1', 'address2', 'city', 'state','zip')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'address1', 'address2', 'city', 'state','zip')

class TimesheetSerializer(serializers.ModelSerializer):
    company_name_details=CompanySerializer(source='company_name', read_only=True)
    user_details=ClientSerializer(source='user', read_only=True)
  

    class Meta:
        model = Timesheet
        fields= '__all__'
       
        



class VisitLogSerializer(serializers.ModelSerializer):
    client_details = ClientSerializer(source='client', read_only=True)
    class Meta:
        model = VisitLog
        fields= '__all__'



    