from django.db import models
import django.core

class User(models.Model):

    username = models.TextField()
    password = models.TextField()
    email = models.TextField()
    phone = models.TextField()
    usertypeid = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)