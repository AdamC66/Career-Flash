from django.db import models
from django.contrib.auth.models import User, Group
from django.core.validators import ( MinLengthValidator, MaxLengthValidator, MinValueValidator, URLValidator)
from phone_field import PhoneField

# Possibly not needed but don't delete yet
# class Profile(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile_users')

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"

# class Organization_Profile(models.Model):
#     group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name="profile_orgs")

#     def __str__(self):
#         return f"{self.name}"

class Application(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="job_applications")
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    description = models.TextField(null=True)
    notes = models.TextField(null=True)
    contact_name = models.CharField(max_length=255, null=True)
    contact_email = models.CharField(max_length=255, null=True)
    contact_phone = PhoneField(blank=True, help_text='Contact phone number')
    date_submitted = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255, null=True)

    def __str__(self):
        return f"{self.company} {self.position} submitted on {self.date_submitted}"

class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profiles_user')
    brand_statement = models.TextField(null=True, max_length=500, blank=True)
    resume = models.FileField(null=True, upload_to='',blank=True)
    cover_letter = models.FileField(null=True, upload_to='',blank=True)
    github = models.URLField(null=True, validators=[URLValidator],blank=True)
    linkedin = models.URLField(null=True, validators=[URLValidator],blank=True)
    portfolio = models.URLField(null=True, validators=[URLValidator],blank=True)

    def __str__(self):
        return f"{self.brand_statement}"

class Comment_Resume(models.Model):
    message = models.TextField(validators=[MinLengthValidator(1), MaxLengthValidator(500)])
    comment_time = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments_resume')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments_resume', null=True)
    
    def __str__(self):
        return f"{self.message}"

class Comment_Cover_Letter(models.Model):
    message = models.TextField(validators=[MinLengthValidator(1), MaxLengthValidator(500)])
    comment_time = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments_coverletter')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments_coverletter', null=True)
    
    def __str__(self):
        return f"{self.message}"