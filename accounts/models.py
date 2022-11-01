from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.
class User(AbstractUser):
    # customer = models.BooleanField(default=False)
    pass
    

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete= models.CASCADE, null=True)
    avatar = models.ImageField(upload_to='profiles/', blank=True)
    display_name = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.user.username