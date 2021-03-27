from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Local


# Register your models here.
@admin.register(Local)
class LocalAdmin(OSMGeoAdmin):
    list_display = ('date', 'location')