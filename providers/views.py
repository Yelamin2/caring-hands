import os
from rest_framework import generics, status
from rest_framework.response import Response
from .models import  AbstractUser, Messages, Invoice
from .serializers import  MessagesSerializer, InvoiceSerializer
from django.contrib.auth import get_user_model
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

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
    
    # print((Invoice.user.provider_invoice), 5+7, 'here is the user')
    message = Mail(
        from_email="yelamin2@gmail.com",
        to_emails='yelamin2@yahoo.com',
        subject='Your invoice is ready',
        html_content=f"\
        Hi {User.username},\
        <br><br>Please find below your billable hours for  our services for {Invoice.hours} hrs \
        "
        )

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)

        # return Response( status=200)

    except Exception as e:
        print("ERROR", e)