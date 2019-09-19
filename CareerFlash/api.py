# Will clear out later
import logging
import os
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from CareerFlash.serializers import *
from CareerFlash.models import *
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, parsers

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
    queryset = Orginization.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        if len(self.self.request.user.owned_orgs.all()) > 0:
            return self.request.user.owned_orgs.all()
        else:
            return Response({"detail": "No Owned Orginizations Found."}, status=status.HTTP_404_NOT_FOUND)
    def list(self, request):
        queryset = Orginization.objects.filter(owner=request.user)
        serializer = GroupSerializer(queryset, many=True)
        if queryset: 
            return  Response(data=serializer.data)
        else:
            return Response({"detail": "No Owned Orginizations Found."}, status=status.HTTP_404_NOT_FOUND)

class GroupUserViewSet(viewsets.ModelViewSet):
    queryset = Orginization.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        group_id = request.GET.get('group_id', None)
        queryset = User.objects.all()
        if group_id and request.user == Orginization.objects.filter(id=group_id).first().owner:
            queryset = queryset.filter(orginization=group_id)
        else:
            return Response({"detail": "You do not  manage any groups."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer(queryset, many=True)
        if queryset: 
            return  Response(data=serializer.data)
        else:
            return Response({"detail": "No Users Found."}, status=status.HTTP_404_NOT_FOUND)

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

    def list(self, request):
        user_id= request.GET.get('user_id', None)
        queryset = Profile.objects.all()
        if user_id:
            queryset = queryset.filter(owner__id=user_id)
            serializer = ProfileSerializer(queryset, many=True)
            serializer.data[0]['user_name']=(queryset.first().owner.first_name + " " + queryset.first().owner.last_name)
            return Response(data=serializer.data)
        else:
            queryset = Profile.objects.filter(owner=self.request.user)
            serializer=ProfileSerializer(queryset, many=True)
            serializer.data[0]['user_name']=(queryset.first().owner.first_name + " " + queryset.first().owner.last_name)
            return Response(data=serializer.data,status=status.HTTP_200_OK)

class CommentResumeViewSet(viewsets.ModelViewSet):
    serializer_class = CommentResumeSerializer
    queryset = Comment_Resume.objects.all()
    owner = serializers.PrimaryKeyRelatedField(
        read_only=True, 
        default=serializers.CurrentUserDefault()
    )
    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.IsAuthenticated,)
        return super(CommentResumeViewSet, self).get_permissions()

    def get_queryset(self):
        return self.request.user.comments_resume.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user, profile=self.request.user.profiles_user)

    def list(self, request):
        profile_id= request.GET.get('user_id', None)
        queryset = Comment_Resume.objects.filter(profile=profile_id)

        if profile_id:
            queryset = queryset.filter(profile__id=profile_id)
            serializer = CommentResumeSerializer(queryset, many=True)
            return Response(data=serializer.data)
        else:
            self.request.user.comments_resume.all()
            serializer=CommentResumeSerializer(queryset, many=True)
            return Response(data=serializer.data,status=status.HTTP_200_OK)



class CommentCoverLetterViewSet(viewsets.ModelViewSet):
    serializer_class = CommentCoverLetterSerializer
    queryset = Comment_Cover_Letter.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.IsAuthenticated,)
        return super(CommentCoverLetterViewSet, self).get_permissions()

    def get_queryset(self):
        return self.request.user.comments_coverletter.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)