"""CareerFlash URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers                
from . import views
from . import api
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls import url
from rest_framework import routers
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from rest_framework.authtoken import views as auth_views


router = routers.DefaultRouter()
router.register(r'users', api.UserViewSet)
router.register(r'groups', api.GroupViewSet)
router.register(r'applications', api.ApplicationViewSet)
router.register(r'submittals', api.SubmittalViewSet)
router.register(r'commentsresume', api.CommentResumeViewSet)
router.register(r'commentscoverletter', api.CommentCoverLetterViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/it/', csrf_exempt(views.ApiView.as_view())),
    path('api-token-auth/', auth_views.obtain_auth_token, name='api-token-auth'),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # url(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    # Put the API and admin routes about so they don't get eaten by the matcher?
    # must be catch-all for pushState to work
    # url(r'^', views.FrontendAppView.as_view()),
]