
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include


urlpatterns = [
    path('', views.index),
    path('basket', views.basket),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)