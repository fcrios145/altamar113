from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=256)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Plate(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    photo = models.ImageField(upload_to='plates', default="default.jpg")

    def __str__(self):
        return self.name


