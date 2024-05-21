from django.shortcuts import render

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def rewiew_data(request):
