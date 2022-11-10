from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import VisitDay
from rest_framework.authtoken.models import Token


class VisitDaySerializer(serializers.ModelSerializer):

    class Meta:
        model = VisitDay

        fields= '__all__'
        
        # read_only_fields = ('id','username')


    