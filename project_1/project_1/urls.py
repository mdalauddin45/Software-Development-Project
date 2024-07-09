from django.contrib import admin
from django.urls import path,include
from project_1 import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('firstapp/', include("firstapp.urls")),
]
