from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=250,blank=True)
    age = models.IntegerField(null=True)
    address = models.TextField()
    is_active = models.BooleanField(default=True)
    phone = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)