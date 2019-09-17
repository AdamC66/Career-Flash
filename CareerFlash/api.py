# Will clear out later
import logging
import os
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions, status
from CareerFlash.serializers import *
from CareerFlash.models import *
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.decorators import action

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

    # @action(detail=True, methods = ['put'], name='Update Profile')
    # def update_profile(self, request, pk = None):
    #     if self.request.method == 'PUT':
    #         profile = self.get_object()
    #         serializer = ProfileSerializer(data=request.data)
    #         if serializer.is_valid():
    #             profile.update_profile(serializer.data)
    #             profile.save()
    #             return Response({'status': 'Updated profile'})
    #         else: 
    #             return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class CommentResumeViewSet(viewsets.ModelViewSet):
    serializer_class = CommentResumeSerializer
    queryset = Comment_Resume.objects.all()

    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.IsAuthenticated,)
        return super(CommentResumeViewSet, self).get_permissions()

    def get_queryset(self):
        return self.request.user.Comment_Resume.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentCoverLetterViewSet(viewsets.ModelViewSet):
    serializer_class = CommentCoverLetterSerializer
    queryset = Comment_Cover_Letter.objects.all()