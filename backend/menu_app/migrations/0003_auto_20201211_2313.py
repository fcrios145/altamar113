# Generated by Django 3.1.4 on 2020-12-11 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu_app', '0002_auto_20201210_2116'),
    ]

    operations = [
        migrations.AddField(
            model_name='plate',
            name='description_html',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='url',
            field=models.SlugField(blank=True, max_length=255, unique=True),
        ),
    ]
