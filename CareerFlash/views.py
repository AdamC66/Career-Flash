import logging
import os
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from datetime import datetime 
from django import forms 
from django.contrib.auth.decorators import login_required 
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm 
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse 
from django.conf import settings
import json
import requests
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from django.views.generic import View
from CareerFlash.serializers import *
from CareerFlash.models import *


# Not sure if should be here or in api.py, check folder, will come back later
# def root(request): 
#     return redirect('home/')
    
# def home(request): 
#     context = {}
#     return render(request, 'index.html', context)

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class GroupViewSet(viewsets.ModelViewSet):
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer

# class ApplicationViewSet(viewsets.ModelViewSet):
#     serializer_class = ApplicationSerailizer
#     # queryset = Application.objects.all()
#     def get_queryset(self)

# class SubmittalViewSet(viewsets.ModelViewSet):
#     serializer_class = SubmittalSerializer
#     queryset = Submittal.objects.all()

# class CommentResumeViewSet(viewsets.ModelViewSet):
#     serializer_class = CommentResumeSerializer
#     queryset = Comment_Resume.objects.all()

# class CommentCoverLetterViewSet(viewsets.ModelViewSet):
#     serializer_class = CommentCoverLetterSerializer
#     queryset = Comment_Cover_Letter.objects.all()


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `npm
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )


class ApiView(View):

    def get(self, request):
        return JsonResponse({
            "it": "THIS IS OUR FIRST DJANGO REQUEST :c"
        })

    @csrf_exempt
    def post(self, request):
        return JsonResponse({
            "it": "THIS IS ALSO COMING FROM DJANGO"
        })


