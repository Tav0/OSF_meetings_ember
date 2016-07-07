from rest_framework import serializers
from django.contrib.auth.models import User, Group
from models import Reviewer, Reviewslist, submissionevals

class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewer

        fields = ('name', 'affiliation', 'email', 'bio', 'research', 'website', 'osfreviews', 'avatar')




class ReviewslistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewslist
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
