from multiprocessing import context
from urllib import response
from django.shortcuts import render, redirect
from django.template import RequestContext
from django.db import connection
from core.models import Usuarios
from django.apps import apps
import cx_Oracle
from django.core.files.base import ContentFile
import base64



# Create your views here.
def index(request):
    datos_productos=lista_productos()
    arreglo= []
    for i in datos_productos:
        data = {
            'data': i,
            'imagen':str(base64.b64encode(i[2].read()), 'utf-8')
        }
        arreglo.append(data)

    data={
        'productos':arreglo
    }
    
    return render(request,'core/index.html',data) #contenido hacia la vista

def login(request):  #login
    data={}
    if request.method == 'POST':
        
        Nombre= request.POST.get('user')
        Contrasenia= request.POST.get('pass')   
        respuesta = log(Nombre,Contrasenia)
        if respuesta=='Admin':
            data['validador'] =1
            data['usuario'] =Nombre
            return render(request, 'core/login.html',data)
            
        elif respuesta=='Cliente':
            data['validador'] =2
            data['usuario'] =Nombre
            return render(request, 'core/login.html',data)
        
        else:
            data['validador'] =3
            print('no paso')
    return render(request, 'core/login.html',data)  #enviamos el contenido a la vista

def log(usuario,contrasenia):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    Nombre = cursor.var(cx_Oracle.STRING)

    cursor.callproc("SP_LOGIN",[usuario,contrasenia,Nombre]) 
    
    return Nombre.getvalue()


def registro(request):
    
    data={
        'usuario':lista_usuarios()
    }

    if request.method == 'POST':
        
        Nombre= request.POST.get('nombre')
        Correo= request.POST.get('correo')
        Telefono= request.POST.get('telefono')
        Direccion= request.POST.get('direccion')
        Contrasenia1= request.POST.get('pass1')
        Contrasenia2=request.POST.get('pass2')
        Tipo=request.POST.get('tipo')
        if Contrasenia1==Contrasenia2:
            
            respuesta = crear_usuario(Nombre,Contrasenia1,Correo,Telefono,Direccion,Tipo)
        
            if respuesta== 1:
                data['validador'] =1
            else:  
                data['validador'] =2
        else:
                data['validador'] =3

    return render(request,'core/registro.html',data)

#put crear


    
def quienes(request):
  
    return render(request,'core/quienes.html')

def ubicacion(request):
    return render(request,'core/ubicacion.html')

def evento(request):
    return render(request,'core/evento.html')

def indexlog(request,nombre):
    datos_productos=lista_productos()
    arreglo= []
    for i in datos_productos:
        data = {
            'data': i,
            'imagen':str(base64.b64encode(i[2].read()), 'utf-8')
        }
        arreglo.append(data)

    data={
        'producto':arreglo,
        'user':nombre,
        'usuario':get_user(nombre)
    }
    if request.method == 'POST':
        boton= request.POST.get('boton')
        Idpedido= request.POST.get('idpedido')
        Nombreusuario= request.POST.get('nombreusuario')
        Combos= request.POST.get('combos')
        Direccion= request.POST.get('direccion')
        Telefono= request.POST.get('telefono')
        Total= request.POST.get('total')
        Fecha=request.POST.get('fecha')
        if boton == "Comprar":
            respuesta = crear_pedido(Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2
    
    return render(request,'core/indexlog.html',data) #contenido hacia la vista


    



def quieneslog(request,nombre):
    data={
     'user':nombre
    }
    return render(request,'core/quieneslog.html',data)

def ubicacionlog(request,nombre):
    data={
     'user':nombre
    }
    return render(request,'core/ubicacionlog.html',data)

def eventolog(request,nombre):
    data={
     'user':nombre
    }
    return render(request,'core/eventolog.html',data)    

def dashboard(request,nombre):
    data={
        'user':nombre,
        'usuario':get_user(nombre),
        'producto':lista_pedidos(),
        'usuarios':lista_usuarios()
        
    }
    if request.method == 'POST':
        boton= request.POST.get('boton')
        Idpedido= request.POST.get('idpedido')
        Nombreusuario= request.POST.get('nombreusuario')
        Combos= request.POST.get('combos')
        Direccion= request.POST.get('direccion')
        Telefono= request.POST.get('telefono')
        Total= request.POST.get('total')
        Fecha=request.POST.get('fecha')
        if boton == "Crear":
            respuesta = crear_pedido(Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2
        if boton == "Eliminar":
            respuesta = eliminar_pedido(Idpedido)
            if respuesta == 1:
                data['validador'] =3
            elif respuesta == 0:
                data['validador'] =4
        # if boton == "Modificar":
        #     respuesta = modificar_pedido(Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total)
        #     print(Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total);
            # if respuesta == 1:
            #     data['validador'] =5
            #     return render(request, 'core/dashboard.html',data)
            # elif respuesta == 0:
            #     data['validador'] =6     
        
    return render(request, 'core/dashboard.html',data)  #enviamos el contenido a la vista
def modificarpedido(request,nombre,id):
    data={
        'user':nombre,
        'pedido': get_pedido(id)
    }
    if request.method == 'POST':
        boton=request.POST.get('boton')
        Idpedido= request.POST.get('idpedido')
        Nombreusuario= request.POST.get('nombreusuario')
        Combos= request.POST.get('combos')
        Direccion= request.POST.get('direccion')
        Telefono= request.POST.get('telefono')
        Total= request.POST.get('total')
        Fecha=request.POST.get('fecha')
        if boton == "Modificar":
            respuesta = modificar_pedido(Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2    
    return render(request,'core/modificarpedido.html',data)

def traerpedido(id):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    resp= cursor.var(cx_Oracle.NUMBER)
    usuariox= cursor.var(cx_Oracle.STRING)
    combox= cursor.var(cx_Oracle.STRING)
    direccionx= cursor.var(cx_Oracle.STRING)
    totalx= cursor.var(cx_Oracle.STRING)
    fechax=cursor.var(cx_Oracle.STRING)
    cursor.callproc("SP_GET_PEDIDO",[id,usuariox,combox,direccionx,totalx,fechax,resp]) 

        
    return  resp.getvalue(),usuariox.getvalue(),combox.getvalue(),direccionx.getvalue(),totalx.getvalue(),fechax.getvalue() 
                                # 2                      3                    4                   5                   6
def seguimientopedido(request,nombre):
    data={
        'user':nombre,
        'usuario':get_user(nombre)
    }
    if request.method == 'POST':
        boton= request.POST.get('boton')
        Idpedido= request.POST.get('idpedido')
        if boton == "Buscar":
            respuesta = traerpedido(Idpedido)
            print(respuesta)
            if respuesta[0] == 1:
                data['validador'] =1
                data['nombre'] =respuesta[1]
                data['combo'] =respuesta[2]
                data['direccion'] =respuesta[3]
                data['total'] =respuesta[4]
                data['fecha'] =respuesta[5]
            elif respuesta[0] == 2:
                data['validador'] =2

    return render(request, 'core/seguimientopedido.html',data)  


def modificar_pedido(Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    respuesta = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_MODIFICAR_PEDIDO",[Idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha,respuesta]) 
    return respuesta.getvalue()    

def eliminar_pedido(idpedido):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    respuesta = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_ELIMINAR_PEDIDO",[idpedido,respuesta]) 
    return respuesta.getvalue()

def crear_pedido(idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha):

    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    resp = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_CREAR_PEDIDOS",[idpedido,Nombreusuario, Combos, Direccion, Telefono, Total,Fecha,resp]) 

    return resp.getvalue()


def lista_pedidos():
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_LISTAR_PEDIDOS",[out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista

def estadistica(request,nombre):
    data={
        'user':nombre
    }
    return render(request, 'core/estadistica.html',data)


def inventario(request,nombre): 
    data={
        'user':nombre,
        'producto':lista_productos()
    }
    if request.method == 'POST':
        boton=request.POST.get('boton')
        Nombre= request.POST.get('nombre')
        Porciones= request.POST.get('porciones')
        # Imagen= request.FILES['imagen'].read()
        Descripcion= request.POST.get('descripcion')
        Stock= request.POST.get('stock')
        Precio= request.POST.get('precio')
        if boton == "Crear":
            Imagen= request.FILES['imagen'].read()
            respuesta = crear_producto(Nombre,Porciones,Imagen,Descripcion,Stock,Precio)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2

        if boton == "Eliminar":
            respuesta = eliminar_producto(Nombre)
            if respuesta == 1:
                data['validador'] =3
            elif respuesta == 0:
                data['validador'] =4
        if boton == "Modificar":
            respuesta = modificar_producto(Nombre,Porciones,Imagen,Descripcion,Stock,Precio)
            if respuesta == 1:
                data['validador'] =5
            elif respuesta == 0:
                data['validador'] =6
    return render(request, 'core/inventario.html',data)  #enviamos el contenido a la vista
def modificarinventario(request,nombre,nom):
    data={
        'user':nombre,
        'producto': traerprod(nom)
    }
    if request.method == 'POST':
        boton=request.POST.get('boton')
        Nombre= request.POST.get('nombre')
        Porciones= request.POST.get('porciones')
        Descripcion= request.POST.get('descripcion')
        Stock=request.POST.get('stock')
        Precio= request.POST.get('precio')
        if boton == "Modificar":
            respuesta = modificar_producto(Nombre,Porciones,Descripcion,Stock,Precio)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2
    return render(request,'core/modificarinventario.html',data)


def traerprod(nom):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_GET_PRODUCTO",[nom,out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista

def get_pedido(id):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_GET_PEDIDOS",[id,out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista

def eliminar_producto(nombre):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    respuesta = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_ELIMINAR_PRODUCTO",[nombre,respuesta]) 
    return respuesta.getvalue()


def crear_producto(Nombre,Porciones,Imagen,Descripcion,Stock,Precio):

    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    resp = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_CREAR_PRODUCTOS",[Nombre,Porciones,Imagen,Descripcion,Stock,Precio,resp]) 

    return resp.getvalue()

def modificar_producto(Nombre,Porciones,Descripcion,Stock,Precio):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    respuesta = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_MODIFICAR_PRODUCTO",[Nombre,Porciones,Descripcion,Stock,Precio,respuesta]) 
    return respuesta.getvalue()


def lista_productos():
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_LISTAR_PRODUCTOS",[out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista

def ventas(request):
    return render(request, 'core/ventas.html')    

def logadm(request):
    return render(request, 'core/logadm.html')    

def usuarios(request,nombre):

    data={
        'user':nombre,
        'usuario':lista_usuarios()
    }
    if request.method == 'POST':
        boton=request.POST.get('boton')
        Nombre= request.POST.get('nombre')
        Contrasenia= request.POST.get('contraseña')
        Correo= request.POST.get('correo')
        Telefono= request.POST.get('telefono')
        Direccion= request.POST.get('direccion')
        Tipo=request.POST.get('tipo')
        if boton == "Crear":
            respuesta = crear_usuario(Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2
        if boton == "Eliminar":
            respuesta = eliminar_usuario(Nombre)
            if respuesta == 1:
                data['validador'] =3
            elif respuesta == 0:
                data['validador'] =4
        if boton == "Modificar":
            respuesta = modificar_usuario(Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo)
            if respuesta == 1:
                data['validador'] =5
            elif respuesta == 0:
                data['validador'] =6
               

    return render(request, 'core/usuarios.html',data)
def modificarusuario(request,nombre,nom):
    data={
        'user':nombre,
        'usuario': traeruser(nom)
    }
    if request.method == 'POST':
        boton=request.POST.get('boton')
        Nombre= request.POST.get('nombre')
        Contrasenia= request.POST.get('contraseña')
        Correo= request.POST.get('correo')
        Telefono= request.POST.get('telefono')
        Direccion= request.POST.get('direccion')
        Tipo=request.POST.get('tipo')
        if boton == "Modificar":
            respuesta = modificar_usuario(Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2
    return render(request,'core/modificarusuario.html',data)

def traeruser(nom):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_GET_USUARIO",[nom,out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista

def modificar_usuario(Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    respuesta = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_MODIFICAR_USUARIO",[Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo,respuesta]) 
    return respuesta.getvalue()

def get_user(nombre):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("getuser",[nombre,out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista
        

def eliminar_usuario(nombre):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    respuesta = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_ELIMINAR_USUARIO",[nombre,respuesta]) 
    return respuesta.getvalue()

def crear_usuario(Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo):
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    resp = cursor.var(cx_Oracle.NUMBER)

    cursor.callproc("SP_CREAR_USUARIO",[Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo,resp]) 

    return resp.getvalue()
    
    
def lista_usuarios():
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callproc("SP_LISTAR_USUARIO",[out_cur]) 

    lista = []
    for fila in out_cur:
        lista.append(fila)
        
    return lista



# def repartidores(request):
#     return render(request, 'core/repartidores.html')    
def perfil(request,nombre):
    data={
      
        'user':nombre,
        'usuario':get_user(nombre)
    }
    if request.method == 'POST':
        boton=request.POST.get('boton')
        Nombre= request.POST.get('nombre')
        Contrasenia= request.POST.get('contraseña')
        Correo= request.POST.get('correo')
        Telefono= request.POST.get('telefono')
        Direccion= request.POST.get('direccion')
        Tipo=request.POST.get('tipo')
        if boton == "Modificar":
            respuesta = modificar_usuario(Nombre,Contrasenia,Correo,Telefono,Direccion,Tipo)
            if respuesta == 1:
                data['validador'] =1
            elif respuesta == 0:
                data['validador'] =2


    return render(request, 'core/perfil.html',data)  
# def administradores(request):
#     return render(request, 'core/administradores.html')        


