from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Local

class LocalSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Local
        geo_field = "location"        
        fields = ('id', 'date')