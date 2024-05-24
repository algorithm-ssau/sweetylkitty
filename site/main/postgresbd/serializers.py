from rest_framework import serializers  # type: ignore
from postgresbd.models import *
 
 
class CakeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Cake
        fields = ('id',
                  'category',
                  'title',
                  'description')
                  
class RewiewSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Rewiew
        fields = ('id',
                  'email',
                  'name',
                  'description')