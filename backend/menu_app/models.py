from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.template.defaultfilters import slugify
import markdown
import html



# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=256)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    url = models.SlugField(max_length=255, unique=True, blank=True)

    def __str__(self):
        return self.name


class Plate(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    description_html = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    photo = models.ImageField(upload_to='plates', default="default.jpg")
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    url = models.SlugField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.name


@receiver(pre_save, sender=Plate)
def pre_save_plate_slugify(sender, instance, *args, **kwargs):
    instance.url = slugify(instance.name)

@receiver(pre_save, sender=Plate)
def pre_save_plate_markdown(sender, instance, *args, **kwargs):
    instance.description_html = html.escape(markdown.markdown(instance.description))



@receiver(pre_save, sender=Category)
def pre_save_category(sender, instance, *args, **kwargs):
    instance.url = slugify(instance.name)
