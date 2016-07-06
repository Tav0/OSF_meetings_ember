from django.conf.urls import url, include
from auth import views

urlpatterns = [
    url(r'^', views.OsfAuthorizationCode.as_view()),
]
