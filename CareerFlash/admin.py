from django.contrib import admin
from CareerFlash.models import Application, Profile, Comment_Resume, Comment_Cover_Letter

# admin.site.register(Profile)
# admin.site.register(Organization_Profile)
admin.site.register(Application)
admin.site.register(Profile)
admin.site.register(Comment_Resume)
admin.site.register(Comment_Cover_Letter)