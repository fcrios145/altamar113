from django.shortcuts import render
from menu_app.serializers import PlateSerializer, CategorySerializer
from rest_framework import viewsets
from menu_app.models import Plate, Category
from rest_framework.permissions import IsAuthenticated



# Create your views here.
class PlateViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows plates to be viewed or edited.
    """
    queryset = Plate.objects.all()
    serializer_class = PlateSerializer
    permission_classes = [IsAuthenticated]


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows plates to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

