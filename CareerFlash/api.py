# Will clear out later
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
from rest_framework import viewsets, permissions
from django.views.generic import View
from CareerFlash.serializers import *
from CareerFlash.models import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerailizer
    queryset = Application.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.job_applications.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SubmittalViewSet(viewsets.ModelViewSet):
    serializer_class = SubmittalSerializer
    queryset = Submittal.objects.all()

class CommentResumeViewSet(viewsets.ModelViewSet):
    serializer_class = CommentResumeSerializer
    queryset = Comment_Resume.objects.all()

class CommentCoverLetterViewSet(viewsets.ModelViewSet):
    serializer_class = CommentCoverLetterSerializer
    queryset = Comment_Cover_Letter.objects.all()