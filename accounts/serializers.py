from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import Profile, CustomUser
from rest_framework.authtoken.models import Token

class CustomRegisterSerializer(RegisterSerializer):
    is_customer = serializers.BooleanField(default=False)
    is_provider = serializers.BooleanField(default=False)

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['is_customer'] = self._validated_data.get('is_customer')
        data_dict['is_provider'] = self._validated_data.get('is_provider')
        return data_dict

class CustomUserDetailSerializer(UserDetailsSerializer):

    class Meta(UserDetailsSerializer.Meta):
        model = CustomUser
        id =serializers.PKOnlyObject
        fields= ('id', 'username', 'first_name', 'last_name','address1','address2','city','state',
        'zip','is_customer','is_provider','company_name','license','expiration')
        read_only_fields = ('id','username', 'is_customer','is_provider',)
        # read_only_fields = ('id','username')

        

    

class ProfileSerializer(serializers.ModelSerializer):
    # user = CustomUserDetailSerializer()
    # username = serializers.ReadOnlyField(source='user.username')
    
    class Meta:
        model = Profile
        fields= '__all__'
        read_only_fields = ['user']
    
        

class TokenSerializer(serializers.ModelSerializer):
    user = CustomUserDetailSerializer()
    # is_customer=CustomUserDetailSerializer() 
    # is_provider= CustomUserDetailSerializer()

    class Meta:
        model = Token
        fields=('key', 'user')

