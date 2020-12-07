from django.test import TestCase
from menu_app.models import Plate

# Create your tests here.
class PlateTestCase(TestCase):
    def setUp(self):
        Plate.objects.create(name="name", description="description")

    def test_plates(self):
        plate = Plate.objects.get(name="name")
        self.assertEqual(plate.name, "name")
