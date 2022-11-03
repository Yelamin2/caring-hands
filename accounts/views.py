from django.shortcuts import render

from rest_framework import generics
from .models import Profile, User
from .serializers import ProfileSerializer, UserSerializer
from .permissions import UserPermissions
from django.shortcuts import render, get_object_or_404

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class=ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer
    permission_classes = (UserPermissions,)

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)
   
