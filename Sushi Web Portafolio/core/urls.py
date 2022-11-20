from django.urls import path
from .views import modificarinventario,modificarusuario,modificarpedido,evento, index, logadm,login, perfil, quienes,registro, ubicacion,indexlog,quieneslog, ubicacionlog, eventolog,dashboard,estadistica,inventario, usuarios,seguimientopedido

urlpatterns = [
    path('',index,name="index"),
    path('index',index,name="index"),
    path('login',login,name="login"),
    path('registro',registro,name="registro"),
    path('quienes',quienes,name="quienes"),
    path('ubicacion',ubicacion,name="ubicacion"),
    path('evento',evento,name="evento"),
    path('indexlog/<nombre>',indexlog,name="indexlog"),
    path('<nombre>/quieneslog/',quieneslog,name="quieneslog"),
    path('<nombre>/ubicacionlog/',ubicacionlog,name="ubicacionlog"),
    path('<nombre>/eventolog/',eventolog,name="eventolog"),
    path('dashboard/<nombre>',dashboard,name="dashboard"),
    path('estadistica/<nombre>',estadistica,name="estadistica"),
    path('inventario/<nombre>',inventario,name="inventario"),
    path('logadm',logadm,name="logadm"),
    path('usuarios/<nombre>',usuarios,name="usuarios"),
    path('perfil/<nombre>', perfil, name="perfil"),
    path('dashboard/<nombre>/modificarpedido/<id>', modificarpedido, name="modificarpedido"),
    path('usuarios/<nombre>/modificarusuario/<nom>', modificarusuario, name="modificarusuario"),
    path('inventario/<nombre>/modificarinventario/<nom>', modificarinventario, name="modificarinventario"),
    path('seguimientopedido/<nombre>', seguimientopedido, name="seguimientopedido"),
    
    
]