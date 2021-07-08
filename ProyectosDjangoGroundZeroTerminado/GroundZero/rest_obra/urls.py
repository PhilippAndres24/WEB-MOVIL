from django.urls import path
from rest_obra.views import lista_obras,detalle_obras

urlpatterns =[
    path('lista_obras', lista_obras , name= "lista_obras"),
    path('detalle_obras/<id>',detalle_obras, name= "detalle_obras"),
]
