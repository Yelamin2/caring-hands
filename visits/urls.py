from django.urls import include, path
from .views import TimesheetListAPIVIEW, TimesheetDetailAPIView, VisitLogListAPIView

urlpatterns = [
    path('visits/',TimesheetListAPIVIEW.as_view(), name= 'Visits_list'),
    path('visits/<int:pk>/', TimesheetDetailAPIView.as_view(), name="time_sheet"),
    path('visitlog/', VisitLogListAPIView.as_view(), name="visits_list" ),
   
]