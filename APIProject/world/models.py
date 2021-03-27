#from django.db import models
from django.contrib.gis.db import models

# Create your models here.


class Local(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    location = models.PointField()
    

    def __str__(self):
        return "oi"