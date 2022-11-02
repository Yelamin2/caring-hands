from django.db import models

class Provider(models.Model):
    



class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete= models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/', default='profile/profile.jpg')
    display_name = models.CharField(max_length=255, null=True)