# Generated by Django 2.2.5 on 2019-09-18 03:06

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('CareerFlash', '0010_auto_20190917_1550'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orginization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_username', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('group_photo', models.ImageField(blank=True, null=True, upload_to='group_image')),
                ('members', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]