# Generated by Django 2.2.5 on 2019-09-19 14:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CareerFlash', '0018_merge_20190918_2315'),
    ]

    operations = [
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
        migrations.AlterField(
            model_name='profile',
            name='cover_letter',
            field=models.FileField(blank=True, null=True, upload_to='./frontend/public/tempdocs/coverletter'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to='./frontend/public/tempdocs/resume'),
        ),
    ]