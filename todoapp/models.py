from django.db import models

# Create your models here.

class todo(models.Model):
        items = models.CharField(max_length=200)
        
