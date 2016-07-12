from django.shortcuts import render
from rest_framework import viewsets
from models import Reviewer, Reviewslist, submissionevals, emails
from serializers import ReviewerSerializer, ReviewslistSerializer, AuthenticationSerializer, evalSerializer, EmailSerializer
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from django.contrib.auth import authenticate, login
from rest_framework import status
import json


USER_STORAGE = {}
CLIENT_ID  = 'f720c20605e84d52ad24cc97e03ed3a8'
CLIENT_SECRET = 'F4qpuFC364JtovxTMEN9R4i9kEAq6umSrcUi1XjR'
REDIRECT_URI = "http://localhost:4200/login"
OSF_API_URL = "https://test-api.osf.io/"
OSF_ACCOUNTS_URL = "https://test-accounts.osf.io/"

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

class ReviewslistViewSet(viewsets.ModelViewSet):
    """
      API endpoint that returns all submissions
      """



    queryset = Reviewslist.objects.all()
    serializer_class = ReviewslistSerializer

    def post(self, request, format=None):
        serializer = ReviewslistSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ReviewslistFilteredViewSet(ListCreateAPIView):
    serializer_class = ReviewslistSerializer

    queryset= Reviewslist.objects.all()

    def get(self, request, rid=None, format=None):
        rl = Reviewslist.objects.filter(reviewer_id=rid)
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






# def send_email(request):
#     subject = request.POST.get('subject', '')
#     message = request.POST.get('message', '')
#     from_email = request.POST.get('from_email', '')
#     to_email = request.POST.get('to_email', '')
#
#
#     send_mail("sheri", "ss", "sherief@vt.edu", ["sherif_hany@hotmail.com"], fail_silently=False)
#
#     return render(request, 'peerreviews/test.html', {})

    # if subject and message and from_email and to_email:
    #     try:
    #         send_mail(subject, message, from_email,[to_email], fail_silently=False)
    #     except BadHeaderError:
    #         return HttpResponse('Invalid header found.')
    #     return HttpResponseRedirect('/contact/thanks/')
    # else:
    #
    #     return HttpResponse('Make sure all fields are entered and valid.')
