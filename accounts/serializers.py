from multiprocessing.spawn import import_main_path
from operator import imod
from rest_framework import serializers
from .models import Profile, User



from django.contrib.auth import get_user_model
# from rest_auth.models import TokenModel

from . import models

user = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields= ('id', 'username', 'first_name', 'last_name', 'customer' , 'provider')

    

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields= '__all__'

# class TokenSerializer(serializers.ModelSerializer):
#     user = UserSerializer()

#     class Meta:
#         model = TokenModel
#         fields=('key', 'user')