from django.db import models

# Create your models here.


class Local(models.Model):
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.date