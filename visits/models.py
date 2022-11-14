from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime  

from .models import AbstractUser

# class Weekday(models.Model):
    # weekday= models.CharField(max_length=16, null=True)
    # # start_time= models.TimeField(auto_now=False, auto_now_add=False, null=True)
    # # end_time=  models.TimeField(auto_now=False, auto_now_add=False, null=True)

    # def __str__(self):
    #     return self.weekday

WEEKDAYS= (
    ("Monday", "Monday"),
    ("Tuesday", "Tuesday"),
    ("Wednesday", "Wednesday"),
    ("Thursday","Thursday"),
    ("Friday", "Friday"),
    ("Saturday", "Saturday"),
    ("Sunday", "Sunday"),
)

class Timesheet(models.Model):
    user= models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='customer_name')
    company_name=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete= models.CASCADE,  related_name='time_sheet')
    weekday=models.CharField(
        max_length = 20,
        choices = WEEKDAYS,
    )
    start_time= models.TimeField()
    end_time=  models.TimeField()
   
    def __str__(self):
        return self.user.username