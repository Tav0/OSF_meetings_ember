from django.contrib import admin
from django.conf.urls import include, url
from peerreviews.views import ReviewerViewSet, ReviewerDetailsViewSet, ReviewslistViewSet, AuthenticateUser
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'reviewers', ReviewerViewSet)
router.register(r'reviewslists', ReviewslistViewSet)
router.register(r'reviewers/(?P<reviewer_id>[0-9]+)/$', ReviewerDetailsViewSet.as_view({'get': 'retrieve'}), base_name='reviewer-details')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('peerreviews.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^login/', include('auth.urls', namespace='login')),
    url(r'^admin/', admin.site.urls, name='admin'),
    url(r'^authenticate/', AuthenticateUser.as_view(), name='authenticate'),
]
