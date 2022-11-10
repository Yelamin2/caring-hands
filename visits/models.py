from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from .models import AbstractUser



# class User(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete= models.CASCADE)

#     def __str__(self):
#         return self.user.username

class VisitDay(models.Model):
    user= models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE )
    weekday= models.CharField(max_length=16, null=True)
    start_time= models.TimeField(auto_now=False, auto_now_add=False, null=True)
    end_time=  models.TimeField(auto_now=False, auto_now_add=False, null=True)
    company_name=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete= models.CASCADE, null=True, related_name="visit_days")
    
    def __str__(self):
        return self.weekday

# class Timesheet(models.Model):
#     user= models.ForeignKey(User, on_delete=models.CASCADE)
#     weekday=models.ManyToOneRel(VisitDay,to=User, field_name=user, on_delete=models.CASCADE)
   
#     def __str__(self):
#         return self.user