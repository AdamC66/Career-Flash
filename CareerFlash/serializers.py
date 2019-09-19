from rest_framework import serializers
from django.contrib.auth.models import User
from CareerFlash.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'groups', 'password')

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class GroupSerializer(serializers.ModelSerializer):
    # users = UserSerializer(many=True)
    class Meta:
        model = Orginization
        fields = ('id', 'name', 'group_photo', 'members', 'owner')

class ApplicationSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('id', 'company', 'position', 'description', 'notes', 'contact_name', 'contact_phone', 'contact_email', 'date_submitted', 'status')

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('owner', 'brand_statement', 'resume', 'cover_letter', 'github', 'linkedin', 'portfolio', 'id')


class CommentResumeSerializer(serializers.ModelSerializer):
    # first_name = serializers.StringRelatedField(source='user', read_only=True)
    class Meta:
        model = Comment_Resume
        fields = ('id', 'message', 'comment_time', 'first_name', 'owner', 'username')
    
    first_name = serializers.SerializerMethodField('get_first_name')
    username = serializers.SerializerMethodField('get_username')
    def get_first_name(self, obj):
        return obj.owner.first_name

    username = serializers.SerializerMethodField('get_username')

    def get_username(self, obj):
        return obj.owner.username


class CommentCoverLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment_Cover_Letter
        fields = ('id', 'message', 'comment_time','first_name', 'owner', 'username')
        
    first_name = serializers.SerializerMethodField('get_first_name')
    username = serializers.SerializerMethodField('get_username')
    def get_first_name(self, obj):
        return obj.owner.first_name

    username = serializers.SerializerMethodField('get_username')

    def get_username(self, obj):
        return obj.owner.username