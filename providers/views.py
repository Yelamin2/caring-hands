
from rest_framework import generics, status
from rest_framework.response import Response
from .models import  AbstractUser, Messages, Invoice
from .serializers import  MessagesSerializer, InvoiceSerializer

from django.shortcuts import render, get_object_or_404




# Create your views here.


class MessagesListAPIView(generics.ListCreateAPIView):
    serializer_class=MessagesSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        # import pdb 
        # pdb.set_trace()
        user = self.request.user
        return Messages.objects.filter(client=user)


class InvoiceListAPIView(generics.ListCreateAPIView):
    serializer_class=InvoiceSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        # import pdb 
        # pdb.set_trace()
        user = self.request.user
        return Invoice.objects.filter(client=user)