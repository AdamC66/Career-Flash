# Generated by Django 2.2.5 on 2019-09-18 03:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0012_auto_20190918_0307'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orginization',
            name='owner_username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owned_orgs', to=settings.AUTH_USER_MODEL),
        ),
    ]
