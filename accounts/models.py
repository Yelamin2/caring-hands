from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.

class CustomUser(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_provider = models.BooleanField(default=False)
    first_name=models.CharField(max_length=28, null=True)
    last_name=models.CharField(max_length=28, null=True)
    address1=models.CharField(max_length=255, null=True, blank=True)
    address2=models.CharField(max_length=255, null=True, blank=True)
    city =models.CharField(max_length=255, null=True, blank=True)
    state=models.CharField(max_length=255, null=True, blank=True)
    zip=models.CharField(max_length=10, null=True, blank=True)
# (settings.AUTH_USER_MODEL, on_delete= models.CASCADE)
    def __str__(self):
        return self.username


    
class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete= models.CASCADE, null=True)
    avatar = models.ImageField(upload_to='profiles/', default='profile/profile.jpg')
    display_name = models.CharField(max_length=255, null=True)
    

    def __str__(self):
        return self.user.username