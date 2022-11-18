from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime  
from django.core.exceptions import ValidationError

from .models import AbstractUser

# class Weekday(models.Model):
    # weekday= models.CharField(max_length=16, null=True)
    # # start_time= models.TimeField(auto_now=False, auto_now_add=False, null=True)
    # # end_time=  models.TimeField(auto_now=False, auto_now_add=False, null=True)

    # def __str__(self):
    #     return self.weekday

WEEKDAYS= (
    ("1", "Monday"),
    ("2", "Tuesday"),
    ("3", "Wednesday"),
    ("4","Thursday"),
    ("5", "Friday"),
    ("6", "Saturday"),
    ("7", "Sunday"),
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
    # notes= models.TextField(null=True, blank=True)
   
    def __str__(self):
        return self.user.username


class VisitLog(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name='provider_visits')
    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name='client_visits')
    start_visit=models.DateTimeField()
    end_visit= models.DateTimeField()
    notes= models.TextField(null=True, blank=True)

    def check_time(self):
        if self.start_visit > self.end_visit:
            raise ValidationError('Start time should be before end time!')
        return 

    def __str__(self):
        return self.user.company_name


    
