from rest_framework import serializers
from myconfig.models import User

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' # Permitir todos los campos