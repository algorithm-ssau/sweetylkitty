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
        reviews = Rewiew.objects.all()
        title = request.GET.get('title', None)
        if title is not None:
            reviews = reviews.filter(name__icontains=title)
        reviews_serializer = RewiewSerializer(reviews, many=True)
        return JsonResponse(reviews_serializer.data, safe=False)

    elif request.method == 'POST':
        review_data = JSONParser().parse(request)
        review_serializer = RewiewSerializer(data=review_data)
        if review_serializer.is_valid():
            review_serializer.save()
            return JsonResponse(review_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)