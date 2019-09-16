# Generated by Django 2.2.5 on 2019-09-16 15:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0003_auto_20190913_1846'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='brand_statement',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='cover_letter',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='profile',
            name='github',
            field=models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator]),
        ),
        migrations.AlterField(
            model_name='profile',
            name='linkedin',
            field=models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator]),
        ),
        migrations.AlterField(
            model_name='profile',
            name='portfolio',
            field=models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator]),
        ),
        migrations.AlterField(
            model_name='profile',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]