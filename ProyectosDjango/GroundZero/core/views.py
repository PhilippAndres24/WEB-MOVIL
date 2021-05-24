from django.shortcuts import render

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

    