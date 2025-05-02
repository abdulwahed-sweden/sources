from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ApiDocument
from users.models import Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Profile
        fields = ['user', 'bio', 'location', 'birth_date', 'preferred_language']

class ApiDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiDocument
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'language']