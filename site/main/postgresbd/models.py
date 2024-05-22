from django.db import models

# Create your models here.

class Test(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')

    def __str__(self):
        return self.title 
    
class Cake (models.Model):
    category = models.CharField(max_length=70, blank=False, default='')
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.title 

class Rewiew (models.Model):
    email = models.CharField(max_length=70, blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.name 
