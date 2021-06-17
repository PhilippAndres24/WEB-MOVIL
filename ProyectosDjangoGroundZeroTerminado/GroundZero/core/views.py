from core.forms import ObraForm
from django.shortcuts import render, redirect
from .models import Obras,Categoria


# Create your views here.
def index(request):
    return render(request,'core/index.html')
    
def qnsomos(request):
    return render(request,'core/qnsomos.html')



def tienda(request):
    return render(request,'core/tienda.html')


def login(request):
    return render(request,'core/login.html')

def registro(request):
    return render(request,'core/registro.html')

def pintura1(request):
    return render(request,'core/pintura1.html')

def pintura2(request):
    return render(request,'core/pintura2.html')

def pintura3(request):
    return render(request,'core/pintura3.html')

def pintura4(request):
    return render(request,'core/pintura4.html')

def pintura5(request):
    return render(request,'core/pintura5.html')
    
def pintura6(request):
    return render(request,'core/pintura6.html')

def home(request):

    obras = Obras.objects.all()

    datos = {
        'obras': obras
    }

    return render(request,'core/home.html',datos)

def form_agregar(request):

    datos = {
        'form': ObraForm()
    }

    if request.method=='POST':
        formulario = ObraForm(request.POST)
        if formulario.is_valid:

            formulario.save()

            datos['mensaje'] ="Guardados Correctamente"
            return redirect(to="home")



    return render(request,'core/form_agregar.html',datos)



def form_mod_obra(request, id):

    obras = Obras.objects.get(nombre=id)

    datos = {

        'form' : ObraForm(instance=obras),

    }
    if request.method=='POST':

        formulario = ObraForm(data=request.POST, instance=obras)

        if formulario.is_valid:
            formulario.save()

            datos['mensaje'] = "Modificados correctamente"
        return redirect(to="home")
    return render(request,'core/form_mod_obra.html', datos)

def form_del_obra(request, id):

    obra = Obras.objects.get(nombre=id)    

    obra.delete()

    return redirect(to="home")

