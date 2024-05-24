from django.conf.urls import url 
from django.urls import path
from postgresbd import views 
 
urlpatterns = [ 
    path('postgresbd/rewiew', views.rewiew_data),
]