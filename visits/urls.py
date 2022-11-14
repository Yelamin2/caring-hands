from django.urls import include, path
from .views import TimesheetListAPIVIEW, TimesheetDetailAPIView

urlpatterns = [
    path('visits/',TimesheetListAPIVIEW.as_view(), name= 'Visits_list'),
    path('visits/user/', TimesheetDetailAPIView.as_view(), name="time_sheet"),
    # path('sheet/', TimesheetLISTAPIVIEW.as_view()),
   
]