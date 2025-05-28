from rest_framework import serializers
from django.contrib.auth.models import get_user_model


User = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)    
    
    
class LoginSerializer( serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()    