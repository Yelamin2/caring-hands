from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime  
from django.core.exceptions import ValidationError
from visits.models import VisitLog


    
# class Provider(models.Model):
#     user =



    
class Messages(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name='provider_message')
    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name='client_message')
    message= models.TextField(null=True, blank=True)
    time=models.TimeField(auto_now=True)

    def __str__(self):
        return" %s %s " % (self.user.first_name, self.user.last_name)

class Invoice(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name='provider_invoice')
    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name='client_invoice')
    start_visit=models.OneToOneField(VisitLog, on_delete = models.CASCADE,  related_name='invoice_start_visit')
    end_visit=models.OneToOneField(VisitLog, on_delete = models.CASCADE, related_name='invoice_end_visit' )
    # visit_duration=models.TimeField()

    def __str__(self):
        return" %s %s " % (self.client.first_name, self.client.last_name)
