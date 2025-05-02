from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProfileSerializer, ApiDocumentSerializer
from .models import ApiDocument
from users.models import Profile

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows profiles to be viewed or edited.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """
        This view should return the profile for the currently authenticated user.
        """
        user = self.request.user
        return Profile.objects.filter(user=user)

class ApiDocumentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows documents to be viewed or edited.
    """
    queryset = ApiDocument.objects.all().order_by('-created_at')
    serializer_class = ApiDocumentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """
        Optionally restricts the returned documents to a given language,
        by filtering against a `language` query parameter in the URL.
        """
        queryset = ApiDocument.objects.all()
        language = self.request.query_params.get('language', None)
        if language is not None:
            queryset = queryset.filter(language=language)
        return queryset