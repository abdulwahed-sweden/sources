from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns
from django.utils.translation import gettext_lazy as _

# Non-translatable URLs
urlpatterns = [
    path('api/', include('api.urls')),
    path('i18n/', include('django.conf.urls.i18n')),  # For language switching
]

# Translatable URLs
urlpatterns += i18n_patterns(
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('', include('users.urls')),
    prefix_default_language=True,
)