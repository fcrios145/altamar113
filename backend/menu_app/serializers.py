from rest_framework import serializers
from menu_app.models import Plate, Category

class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


