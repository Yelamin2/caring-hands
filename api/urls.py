from django.urls import path, include

from . import views

urlpatterns = [
    path('users/', include('accounts.urls')),
    path('visits/', include('visits.urls')),
    path('provider/', include('providers.urls')),
]