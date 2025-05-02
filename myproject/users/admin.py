from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'location', 'preferred_language')
    search_fields = ('user__username', 'user__email', 'location')
    list_filter = ('preferred_language',)