from django.shortcuts import render
from rest_framework import generics
from .models import VisitDay
from .serializers import VisitDaySerializer 
from .permissions import VisitDayPermissions

from django.shortcuts import render, get_object_or_404

# Create your views here.

class VisitDayListAPIView(generics.ListCreateAPIView):
    queryset = VisitDay.objects.all()
    serializer_class=VisitDaySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class VisitDayDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = VisitDay.objects.all()
    serializer_class=VisitDaySerializer
    permission_classes=(VisitDayPermissions,)

    def get_object(self):
        return get_object_or_404(VisitDay, user=self.request.user)
    def perform_update(self, serializer):
        return super().perform_update(serializer) 
        # self, serializer):
        # serializer.save(user=self.request.user)