from django.shortcuts import render
from menu_app.serializers import PlateSerializer

# Create your views here.
class PlateViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = PlateSerializer
