import logging
import os
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from datetime import datetime 
from django import forms 
from django.contrib.auth.decorators import login_required 
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm 
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse 
import json
import requests
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
# from CareerFlash.serializers import UserSerializer, GroupSerializer

# def root(request): 
#     return redirect('home/')
    
# def home(request): 
#     context = {}
#     return render(request, 'index.html', context)
class ApiView(View):

    def get(self, request):
        return JsonResponse({
            "it": "THIS IS COMING FROM DJANGO!!!!!"
        })

    @csrf_exempt
    def post(self, request):
        return JsonResponse({
            "it": "THIS IS ALSO COMING FROM DJANGO"
        })