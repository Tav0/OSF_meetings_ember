

from django.contrib import admin

from .models import Reviewer,Author,reviewslists, submissionevals, emails

admin.site.register(Reviewer)
admin.site.register(Author)
admin.site.register(reviewslists)
admin.site.register(submissionevals)
admin.site.register(emails)
