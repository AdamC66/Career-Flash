from django.db import models
from django.contrib.auth.models import User
from django.core.validators import ( MinLengthValidator, MaxLengthValidator, MinValueValidator, URLValidator)
from phone_field import PhoneField

class Application(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="job_applications")
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True,)
    notes = models.TextField(blank=True, null=True,)
    contact_name = models.CharField(max_length=255, blank=True, null=True)
    contact_email = models.CharField(max_length=255, blank=True, null=True)
    contact_phone = PhoneField(blank=True, null=True, help_text='Contact phone number')
    date_submitted = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.company} {self.position} submitted on {self.date_submitted}"

class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profiles_user')
    profile_picture = models.URLField(null=True, validators=[URLValidator],blank=True)
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
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments_resume')
    # profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments_resume', null=True)
    
    def __str__(self):
        return f"{self.message}"

class Comment_Cover_Letter(models.Model):
    message = models.TextField(validators=[MinLengthValidator(1), MaxLengthValidator(500)])
    comment_time = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments_coverletter')
    # profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments_coverletter', null=True)
    
    def __str__(self):
        return f"{self.message}"

class Orginization(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_orgs')
    name = models.CharField(max_length=255, unique=True)
    members = models.ManyToManyField(User)
    group_photo = models.ImageField(null=True, blank=True, upload_to='group_image')

    def __str__(self):
        return (self.name)