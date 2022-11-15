from django.urls import include, path
from .views import TimesheetListAPIVIEW, TimesheetDetailAPIView, CustomerTimesheetDetailAPIView

urlpatterns = [
    path('visits/',TimesheetListAPIVIEW.as_view(), name= 'Visits_list'),
    path('visits/customer/<int:pk>/', TimesheetDetailAPIView.as_view(), name="time_sheet"),
    path('sheet/<int:pk>/', CustomerTimesheetDetailAPIView.as_view(), name="details_customer" ),
   
]