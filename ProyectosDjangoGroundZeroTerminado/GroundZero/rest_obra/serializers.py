from rest_framework import serializers
from core.models import Obras
class ObrasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Obras
        fields =['nombre','autor','tecnica','precio','dimension','categoria']