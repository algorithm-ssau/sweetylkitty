from django.shortcuts import render

from rest_framework import  status
from rest_framework.response import Response
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view

from postgresbd.models import *
from postgresbd.serializers import * 

from collections import namedtuple


nt = namedtuple("object", ["model", "serializers"])
pattern = {
    "rewiew"  : nt(Rewiew, RewiewSerializer),
    
}

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def rewiew_data(request):
    #object =  pattern.get(api_name, None)
    #if object == None:
       #return Response(
         #   data   = "Invalid URL",
         #   status = status.HTTP_404_NOT_FOUND,
        #)
    if request.method == 'GET':
        rewiew = Rewiew.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            rewiew = rewiew.filter(title__icontains=title)
        
        tutorials_serializer = RewiewSerializer(rewiew, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)

    if request.method == 'POST':
        rewiew_data = JSONParser().parse(request)
        rewiew_serializer = RewiewSerializer(data=rewiew_data)
        if rewiew_serializer.is_valid():
            rewiew_serializer.save()
            return JsonResponse(rewiew_serializer.data, status=status.HTTP_201_CREATED)