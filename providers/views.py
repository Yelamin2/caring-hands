
from rest_framework import generics, status
from rest_framework.response import Response
from .models import  AbstractUser, Messages, Invoice
from .serializers import  MessagesSerializer, InvoiceSerializer
from django.contrib.auth import get_user_model

from django.shortcuts import render, get_object_or_404

User = get_user_model()


# Create your views here.


class MessagesListAPIView(generics.ListCreateAPIView):
    serializer_class=MessagesSerializer

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

    def get_queryset(self):
        # import pdb 
        # pdb.set_trace()
        user = self.request.user
        return Messages.objects.filter(client=user) or Messages.objects.filter(user=user) 
            
        



class InvoiceListAPIView(generics.GenericAPIView):
    serializer_class=InvoiceSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get(self, request, *args, **kwargs):
        # import pdb 
        # pdb.set_trace()
        serializer = InvoiceSerializer(self.request.user, context={'client_id': self.kwargs['client'], 'provider_id': self.request.user.id})
        return Response(serializer.data)