from django.urls import path, include
from .views import index,qnsomos,tienda,login,registro,pintura1,pintura2,pintura3,pintura4,pintura5,pintura6

urlpatterns = [
    path('',index,name="index"),
    path('qnsomos',qnsomos,name="qnsomos"),
    path('tienda', tienda, name='tienda'),
    
    path('login',login,name="login"),
    path('registro',registro,name="registro"),

    path('pintura1',pintura1,name="pintura1"),
    path('pintura2',pintura2,name="pintura2"),
    path('pintura3',pintura3,name="pintura3"),
    path('pintura4',pintura4,name="pintura4"),
    path('pintura5',pintura5,name="pintura5"),
    path('pintura6',pintura6,name="pintura6"),
    
     

]