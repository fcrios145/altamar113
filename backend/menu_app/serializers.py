from rest_framework import serializers
from menu_app.models import Plate, Category

class PlateSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()
    class Meta:
        model = Plate
        fields = '__all__'

    def get_photo(self, plate):
        request = self.context.get('request')
        photo = plate.photo.url
        return request.build_absolute_uri(photo)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


