from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from myconfig.models import User
from myconfig.serializers import UserModelSerializer


# solo es el metodo para mostrar los usuarios
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

