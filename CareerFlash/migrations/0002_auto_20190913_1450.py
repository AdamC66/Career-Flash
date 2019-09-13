# Generated by Django 2.2.5 on 2019-09-13 14:50

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='submittal',
            name='user',
        ),
        migrations.RemoveField(
            model_name='comment_cover_letter',
            name='submittal',
        ),
        migrations.RemoveField(
            model_name='comment_resume',
            name='submittal',
        ),
        migrations.AddField(
            model_name='application',
            name='status',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='comment_cover_letter',
            name='profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments_coverletter', to='CareerFlash.Profile'),
        ),
        migrations.AddField(
            model_name='comment_resume',
            name='profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments_resume', to='CareerFlash.Profile'),
        ),
        migrations.AddField(
            model_name='profile',
            name='brand_statement',
            field=models.TextField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='cover_letter',
            field=models.FileField(null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='profile',
            name='github',
            field=models.URLField(null=True, validators=[django.core.validators.URLValidator]),
        ),
        migrations.AddField(
            model_name='profile',
            name='linkedin',
            field=models.URLField(null=True, validators=[django.core.validators.URLValidator]),
        ),
        migrations.AddField(
            model_name='profile',
            name='portfolio',
            field=models.URLField(null=True, validators=[django.core.validators.URLValidator]),
        ),
        migrations.AddField(
            model_name='profile',
            name='resume',
            field=models.FileField(null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Organization_Profile',
        ),
        migrations.DeleteModel(
            name='Submittal',
        ),
    ]