from django.urls import path, include
from .views import LocalViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('locais', LocalViewSet, basename = 'locais')

urlpatterns = [
    path('api/', include(router.urls)),
]