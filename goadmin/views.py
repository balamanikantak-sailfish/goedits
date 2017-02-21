import os
from django.conf import settings
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from goadmin.models import User
from goadmin.serializers import UserSerializer	
	
def index(request):
    template = loader.get_template('dashboard.html')
    context = {
        'data': 'index',
    }
    return HttpResponse(template.render(context, request))
	
	
@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = [{'username':'admin','password':'admin'}]
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)