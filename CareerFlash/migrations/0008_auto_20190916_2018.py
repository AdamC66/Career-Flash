# Generated by Django 2.2.5 on 2019-09-16 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0007_merge_20190916_2018'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='profile_picture',
        ),
        migrations.AlterField(
            model_name='profile',
            name='cover_letter',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='profile',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
