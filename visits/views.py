from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import  AbstractUser, Timesheet
from .serializers import TimesheetSerializer
from .permissions import TimesheetPermissions

from django.shortcuts import render, get_object_or_404

# Create your views here.

# class PersonCompanyListAPIView(generics.ListCreateAPIView):
#     queryset = PersonCompany.objects.all()
#     serializer_class=PersonCompanySerializer

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

class TimesheetDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Timesheet.objects.all()
    serializer_class=TimesheetSerializer
    # permission_classes=TimesheetPermissions
    def get_object(self):
        return get_object_or_404(Timesheet, user=self.request.user)
    def perform_update(self, serializer):
        
        serializer.save(user=self.request.user)

class TimesheetListAPIVIEW(generics.ListCreateAPIView):
    queryset = Timesheet.objects.all()
    serializer_class=TimesheetSerializer
    
    def create(self, request, *args, **kwargs):
        for dict in request.data:
            # import pdb 
            # pdb.set_trace()
            serializer = self.get_serializer(data=dict)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        
       
        


    def perform_create(self, serializer):
        # import pdb 
        # pdb.set_trace()
        serializer.save(user=self.request.user)