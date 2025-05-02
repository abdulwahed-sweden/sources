from django.db import models
from django.utils.translation import gettext_lazy as _

class ApiDocument(models.Model):
    title = models.CharField(_("Title"), max_length=200)
    content = models.TextField(_("Content"))
    created_at = models.DateTimeField(_("Created At"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Updated At"), auto_now=True)
    language = models.CharField(_("Language"), max_length=10, default='en')
    
    def __str__(self):
        return self.title