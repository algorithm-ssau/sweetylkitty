from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def index(request):
    return render(request, "app\\app.component.html")


def basket(request):
    return HttpResponse("<h4>Корзина заказа</h4>")