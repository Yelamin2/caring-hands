from django.urls import include, path

from .views import  ProfileListAPIView, ProfileDetailAPIView

urlpatterns = [
    path('profiles/',ProfileListAPIView.as_view(), name= 'profile_list'),
    path('profiles/user/', ProfileDetailAPIView.as_view(), name='user_profile'),
]