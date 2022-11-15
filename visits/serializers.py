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

class TimesheetSerializer(serializers.ModelSerializer):
    # user= serializers.SlugRelatedField(
    #      many=False,
    #     queryset=User.objects.all(),
    #     read_only=False,
    #     slug_field='username',
    #     allow_null=True
     

    # )

    # company_name=serializers.ReadOnlyField(source="company_name.Company_name")

    class Meta:
        model = Timesheet
        fields= '__all__'
        depth=2


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class VisitLogSerializer(serializers.ModelSerializer):
    client_details = ClientSerializer(source='client', read_only=True)
    class Meta:
        model = VisitLog
        fields= '__all__'

    