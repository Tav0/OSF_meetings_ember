
from django.contrib import admin

from peerreviews.views import ReviewerViewSet, ReviewslistFilteredViewSet, ReviewslistViewSet, AuthenticateUser, SubmissionEvallistViewSet, EmailViewSet, UserViewSet, ReviewslistIdViewSet, checkLoggedIn
from django.conf.urls import include, url
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'reviewers', ReviewerViewSet)
router.register(r'reviewslists', ReviewslistIdViewSet)

router.register(r'submissionevals',SubmissionEvallistViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api/checklogin/', checkLoggedIn.as_view(), name='checklogin'),
    url(r'^api/reviewers/(?P<rid>[0-9]+)/reviews/', ReviewslistFilteredViewSet.as_view(), name='reviewerslist'),
    url(r'^api/emails/', EmailViewSet.as_view(), name='email'),
    url(r'^login/', include('auth.urls', namespace='login')),
    url(r'^admin/', admin.site.urls, name='admin'),
    url(r'^authenticate/', AuthenticateUser.as_view(), name='authenticate'),
    url(r'^api/', include(router.urls)),
]