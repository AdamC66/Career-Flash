from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Sum, Aggregate
from datetime import datetime 
from django import forms 
from django.contrib.auth.decorators import login_required 
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm 
from django.db.models import Q
import datetime
import pdb
from django.urls import reverse 
import json
import requests

def root(request): 
    return redirect('home/')
    
def home(request): 
    context = {}
    return render(request, 'index.html', context)
