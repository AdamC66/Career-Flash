# Will clear out later
import logging
import os
from django.urls import reverse 
from django.conf import settings
import json
import requests
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from CareerFlash.serializers import *
from CareerFlash.models import *
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated,]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.AllowAny,)
        return super(UserViewSet, self).get_permissions()

    def list(self, request):
        queryset = User.objects.filter(Q(username=request.user.username)).all()
        serializer = UserSerializer(queryset, many = True)
        return Response(serializer.data)

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return self.request.user.groups.all()

class GroupUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().filter(id=1)
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return User.objects.all().filter(groups__id=1) #filter(groups=1)


class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerailizer
    queryset = Application.objects.all()
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.IsAuthenticated,)
        return super(ApplicationViewSet, self).get_permissions()

    def get_queryset(self):
        return self.request.user.job_applications.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return super(ProfileViewSet, self).get_queryset().filter(
            owner=self.request.user)

class CommentResumeViewSet(viewsets.ModelViewSet):
    serializer_class = CommentResumeSerializer
    queryset = Comment_Resume.objects.all()

    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.IsAuthenticated)
        return super(CommentResumeViewSet, self).get_permissions()

    def get_queryset(self):
        return self.request.user.comments_resume.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentCoverLetterViewSet(viewsets.ModelViewSet):
    serializer_class = CommentCoverLetterSerializer
    queryset = Comment_Cover_Letter.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.IsAuthenticated)
        return super(CommentCoverLetterViewSet, self).get_permissions()

    def get_queryset(self):
        return self.request.user.comments_coverletter.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)