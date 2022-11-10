from django.urls import include, path
from .views import VisitDayListAPIView

urlpatterns = [
    path('visits/',VisitDayListAPIView.as_view(), name= 'Visits_list'),
   
]