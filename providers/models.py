from django.db import models
from ..visits.models import VisitDay
from ..accounts.models import CustomUser
from django.conf import settings


    



class Customer(models.Model):
    
    user= models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE )
    
    