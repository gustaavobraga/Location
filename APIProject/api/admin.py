from django.contrib import admin
from .models import Local

# Register your models here.

#admin.site.register(Local)

@admin.register(Local)
class LocalModel(admin.ModelAdmin):
    list_filter = ('latitude', 'longitude')