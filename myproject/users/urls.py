from django.urls import path
from django.utils.translation import gettext_lazy as _
from . import views

app_name = 'users'

urlpatterns = [
    path(_('register/'), views.RegisterView.as_view(), name='register'),
    path(_('login/'), views.CustomLoginView.as_view(), name='login'),
    path(_('logout/'), views.CustomLogoutView.as_view(), name='logout'),
    path(_('profile/'), views.ProfileView.as_view(), name='profile'),
]