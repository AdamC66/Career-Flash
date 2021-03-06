import logging
import os
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from datetime import datetime 
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework import viewsets
from django.views.generic import View
from CareerFlash.serializers import *
from CareerFlash.models import *


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `npm
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )


class ApiView(View):

    def get(self, request):
        return JsonResponse({
            "it": "THIS IS OUR FIRST DJANGO REQUEST :c"
        })

    @csrf_exempt
    def post(self, request):
        return JsonResponse({
            "it": "THIS IS ALSO COMING FROM DJANGO"
        })


