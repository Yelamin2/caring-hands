from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import  Timesheet, AbstractUser
from rest_framework.authtoken.models import Token


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

    # company_name=serializers.ReadOnlyField(source="company_name.Company_name")

    class Meta:
        model = Timesheet
        fields= '__all__'
       

    