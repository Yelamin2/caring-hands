from django.shortcuts import render

from rest_framework import generics
from .models import Profile, User
from .serializers import ProfileSerializer, UserSerializer
# from .permissions import UserPermissions

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class=ProfileSerializer

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer
   
