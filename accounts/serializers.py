from multiprocessing.spawn import import_main_path
from operator import imod
from rest_framework import serializers
from .models import Profile, User



from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from dj_rest_auth.registration.serializers import RegisterSerializer

from . import models

user = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields= ('id', 'username', 'first_name', 'last_name')

    

class ProfileSerializer(serializers.ModelSerializer):
    # username = serializers.ReadOnlyField(source = 'user.username')

    class Meta:
        model = Profile
        fields= '__all__'

class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Token
        fields=('key', 'user')