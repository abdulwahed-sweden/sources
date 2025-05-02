from django.urls import path
from django.utils.translation import gettext_lazy as _
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path(_('about/'), views.AboutView.as_view(), name='about'),
    path(_('contact/'), views.ContactView.as_view(), name='contact'),
]