# Generated by Django 2.2.5 on 2019-09-17 15:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0009_merge_20190917_1519'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment_cover_letter',
            old_name='user',
            new_name='owner',
        ),
        migrations.RenameField(
            model_name='comment_resume',
            old_name='user',
            new_name='owner',
        ),
        migrations.RemoveField(
            model_name='comment_cover_letter',
            name='profile',
        ),
        migrations.RemoveField(
            model_name='comment_resume',
            name='profile',
        ),
    ]
