from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(_("Biography"), max_length=500, blank=True)
    location = models.CharField(_("Location"), max_length=30, blank=True)
    birth_date = models.DateField(_("Birth Date"), null=True, blank=True)
    preferred_language = models.CharField(_("Preferred Language"), max_length=10, blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s profile"