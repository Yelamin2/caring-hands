from django.urls import include, path

from .views import  ProfileListAPIView, ProfileDetailAPIView, UserDetailAPIView, UserListAPIView

urlpatterns = [
    path('profiles/',ProfileListAPIView.as_view(), name= 'profile_list'),
    path('profiles/user/', ProfileDetailAPIView.as_view(),name='user_profile'),
    path('detail/<int:pk>/user/', UserDetailAPIView.as_view()),
    path('users/', UserListAPIView.as_view()),
]