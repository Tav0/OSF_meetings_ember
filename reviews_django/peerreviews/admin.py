

from django.contrib import admin

from .models import Reviewer,Author,Reviewslist, Feedback

admin.site.register(Reviewer)
admin.site.register(Author)
admin.site.register(Reviewslist)
admin.site.register(Feedback)
