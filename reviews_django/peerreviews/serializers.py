from rest_framework import serializers
from django.contrib.auth.models import User, Group
from models import Reviewer, Reviewslist, Feedback

class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewer
        fields = ('name', 'affiliation', 'email', 'bio', 'research', 'website', 'osfReviews')

class ReviewslistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewslist
        fields = ('conference', 'reviewdeadline', 'reviewer',  'author', 'status', 'link', 'attachment')


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

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('reviewer', 'submission', 'ratingPremise', 'ratingResearch', 'ratingStyle', 'comments')
