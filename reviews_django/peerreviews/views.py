from django.shortcuts import render
from rest_framework import viewsets
from models import Reviewer, reviewslists, submissionevals, emails
from serializers import ReviewerSerializer, ReviewslistSerializer, AuthenticationSerializer, evalSerializer, EmailSerializer, UserSerializer
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, UpdateAPIView
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User, Group

from rest_framework import status
import json
import sys

USER_STORAGE = {}
CLIENT_ID  = 'f720c20605e84d52ad24cc97e03ed3a8'
CLIENT_SECRET = 'F4qpuFC364JtovxTMEN9R4i9kEAq6umSrcUi1XjR'
REDIRECT_URI = "http://localhost:4200/login"
OSF_API_URL = "https://test-api.osf.io/"
OSF_ACCOUNTS_URL = "https://test-accounts.osf.io/"


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class UserDetail(APIView):
    resource_name = 'User'
    serializer_class = UserSerializer

    def get(self, request, user_id=None, format=None):
        user = User.objects.get(pk=user_id)
        userSerializer = UserSerializer(user, context={'request': request}, many=False)
        return Response(userSerializer.data)



# Create your views here.
def post_list(request):
    return render(request, 'peerreviews/test.html', {})

class AuthenticateUser(APIView):
    resource_name = 'User'
    serializer_class = AuthenticationSerializer

    def post(self, request, format=None):
        serializer = AuthenticationSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.data['username']
            password = serializer.data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                # the password verified for the user
                login(request, user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                # the authentication system was unable to verify the username and password
                return Response("The username and password were not found", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Incorrect format for POST", status=status.HTTP_404_NOT_FOUND)


class ReviewerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that returns all reviewers.
    """
    queryset = Reviewer.objects.all()
    serializer_class = ReviewerSerializer


class ReviewerDetailsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that returns single reviewer by id
    """

    def get(self, request, pk=None, format=None):
        r = Reviewer.objects.filter(id=pk)
        rs = ReviewerSerializer(r, context={'request': request}, many=False)
        return Response(rs.data)


class ReviewslistIdViewSet(UpdateAPIView):
    """
      API endpoint that returns all submissions
      """

    queryset = reviewslists.objects.all()
    serializer_class = ReviewslistSerializer

    def update(self, request, *args, **kwargs):
            instance = self.get_object()
            instance.status = request.data.get("status")
            print instance.status
            instance.save()

            serializer = self.get_serializer(instance)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)

            return Response(serializer.data)



class ReviewslistViewSet(viewsets.ModelViewSet):
    """
      API endpoint that returns all submissions
      """
    queryset = reviewslists.objects.all()
    serializer_class = ReviewslistSerializer

    def get(self, request, pk=None, format=None):
        rl = reviewslists.objects.all()
        ss = ReviewslistSerializer(rl, context={'request': request}, many=True)
        return Response(ss.data)


    def post(self, request, format=None):
        serializer = ReviewslistSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





class ReviewslistFilteredViewSet(ListCreateAPIView):
    serializer_class = ReviewslistSerializer

    queryset= reviewslists.objects.all()

    def get(self, request, rid=None, format=None):
        rl = reviewslists.objects.filter(reviewer_id=rid)
        ss = ReviewslistSerializer(rl, context={'request': request}, many=True)
        return Response(ss.data)



class SubmissionEvallistViewSet(viewsets.ModelViewSet):


    queryset = submissionevals.objects.all()
    serializer_class = evalSerializer


    def post(self, request, format=None):
        serializer = evalSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmailViewSet(ListCreateAPIView):
    queryset = emails.objects.all()
    serializer_class = EmailSerializer


    def post(self, request, format=None):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_mail(serializer.data['subject'], serializer.data['message'], serializer.data['from_email'], [serializer.data['to_email']], fail_silently=False)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)







