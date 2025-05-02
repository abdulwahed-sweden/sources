from django.contrib import admin
from .models import ApiDocument

@admin.register(ApiDocument)
class ApiDocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at', 'language')
    search_fields = ('title', 'content')
    list_filter = ('language', 'created_at')
    date_hierarchy = 'created_at'