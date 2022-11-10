from django.shortcuts import render


from rest_framework import generics
from .models import Profile, CustomUser
from .serializers import ProfileSerializer, CustomUserDetailSerializer, CustomRegisterSerializer
from .permissions import UserPermissions, ProfilePermissions
from django.shortcuts import render, get_object_or_404

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class=ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer
    permission_classes = (ProfilePermissions,)

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class=CustomUserDetailSerializer
    permission_classes=(UserPermissions,)

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)
    def perform_update(self, serializer):
        return super().perform_update(serializer) 
        # self, serializer):
        # serializer.save(user=self.request.user)
    

class UserListAPIView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class=CustomUserDetailSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
   
