from dj_rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import  Messages, AbstractUser, Invoice
from rest_framework.authtoken.models import Token


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
    client_details = ClientSerializer(source='client', read_only=True)
    user_details= CompanySerializer(source='', read_only=True )
    class Meta:
        model= Invoice
        fields= '__all__'