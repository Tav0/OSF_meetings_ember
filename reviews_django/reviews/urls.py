from django.contrib import admin
from django.conf.urls import include, url

from peerreviews.views import ReviewerViewSet, ReviewslistFilteredViewSet, ReviewslistViewSet, AuthenticateUser, SubmissionEvallistViewSet
from rest_framework import routers
from django.contrib.staticfiles.urls import static
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'reviewers', ReviewerViewSet)
router.register(r'reviewslists', ReviewslistViewSet)
router.register(r'submissionevals',SubmissionEvallistViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('peerreviews.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api/reviewers/(?P<rid>[0-9]+)/reviews/', ReviewslistFilteredViewSet.as_view(), name='list'),
    url(r'^login/', include('auth.urls', namespace='login')),
    url(r'^admin/', admin.site.urls, name='admin'),
    url(r'^authenticate/', AuthenticateUser.as_view(), name='authenticate'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) +  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

