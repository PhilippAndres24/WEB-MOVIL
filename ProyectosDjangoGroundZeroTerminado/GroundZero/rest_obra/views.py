from django.shortcuts import render
from rest_framework import status   
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from core.models import Obras
from .serializers import ObrasSerializer
from django.views import View
from django.http import JsonResponse

@csrf_exempt
@api_view(['GET', 'POST'])

def lista_obras(request):
    #LISTA OBRAS

    if request.method == 'GET':
        obra = Obras.objects.all()
        serializer = ObrasSerializer(obra, many=True) 
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)  
        serializer = ObrasSerializer(data=data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_201_CREATED)

##
@api_view(['GET', 'PUT','DELETE'])
def detalle_obras(request,id):

    try:
        obra = Obras.objects.get(nombre=id)
    except Obras.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if(request.method=='GET'): #recuperar 1 obra x nombre
        serializer= ObrasSerializer(obra)
        return Response(serializer.data)
    if(request.method=='PUT'): #ACTUALIZA 1 OBRA    
        data=JSONParser().parse(request)
        serializer=ObrasSerializer(obra,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

    elif(request.method=='DELETE'):
        obra.delete()    
        return Response(status=status.HTTP_204_NO_CONTENT)
# Create your views here.