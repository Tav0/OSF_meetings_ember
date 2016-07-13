from rest_framework import serializers
from django.contrib.auth.models import User, Group
from models import Reviewer, reviewslists, submissionevals, emails
from rest_framework import serializers as ser

class UserSerializer(ser.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'groups')


class GroupSerializer(ser.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')


class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewer

        fields = ('name', 'affiliation', 'email', 'bio', 'research', 'website', 'osfreviews', 'avatar')


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = emails

        fields = ('from_email','to_email','message', 'subject')

class ReviewslistSerializer(serializers.ModelSerializer):
    class Meta:
        model = reviewslists
        fields = ('conference', 'title','reviewdeadline', 'reviewer',  'author', 'status', 'link', 'attachment')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
		model = Group
		fields = ('url', 'name')

class AuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, data):
        return data

class evalSerializer(serializers.ModelSerializer):
    class Meta:
        model = submissionevals
        fields = ('premise', 'research', 'style', 'comment', 'total')
