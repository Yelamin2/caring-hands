from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Timesheet(models.Model):
    customer=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete= models.CASCADE, blank=True)
    display_name = models.CharField(max_length=255, null=True)
    weekday= models.DateField(auto_now=False)
    start_time= models.TimeField(auto_now=False, auto_now_add=False, null=True)
    end_time=  models.TimeField(auto_now=False, auto_now_add=False, null=True)

    def __str__(self):
        return self.customer.name
