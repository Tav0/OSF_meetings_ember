from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, Group

import datetime




class Reviewer(models.Model):
    user = models.OneToOneField(User,default=None)
    name = models.CharField(max_length=200)
    affiliation = models.TextField(null=True)
    email = models.EmailField(default=None)
    bio = models.TextField(null=True)
    research = models.TextField(null=True)
    website = models.URLField(null=True)
    osfreviews = models.IntegerField(default=0)
    avatar = models.ImageField(blank=True, null=True, upload_to='media/avatars')

class Author(models.Model):

    name = models.CharField(max_length=200)
    email = models.EmailField(default=None)


class reviewslists(models.Model):

    conference = models.TextField(null=True)
    title = models.TextField(null=True)
    reviewdeadline = models.DateField(default=None)
    reviewer = models.ForeignKey(Reviewer,null=True)
    author_name = models.TextField(null=True)
    author_email = models.TextField(null=True)
    status = models.CharField(max_length=100)
    link = models.URLField(blank=True, null=True)
    attachment = models.FileField(null=True, upload_to='media/files')


class emails(models.Model):

    from_email = models.EmailField(null=True)
    to_email = models.EmailField(null=True)
    message = models.TextField(default=None)
    subject = models.TextField(default=None)




class submissionevals(models.Model):

    #reviewer = models.OneToOneField(Reviewer)
    #submission = models.OneToOneField(Reviewslist)
    premise = models.IntegerField(default=0)
    research = models.IntegerField(default=0)
    style = models.IntegerField(default=0)
    comment = models.TextField(null=True)


    @property
    def total(self):
        return self.premise + self.research + self.style

