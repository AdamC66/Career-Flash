# Generated by Django 2.2.5 on 2019-09-18 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0011_orginization'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orginization',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
