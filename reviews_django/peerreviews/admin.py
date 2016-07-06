

from django.contrib import admin

from .models import Reviewer,Author,Reviewslist, submissionevals

admin.site.register(Reviewer)
admin.site.register(Author)
admin.site.register(Reviewslist)
admin.site.register(submissionevals)
