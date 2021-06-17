from django.contrib import admin
from .models import Categoria,Obras
# Register your models here.

#Permite administrar el modelo completo 

admin.site.register(Categoria)
admin.site.register(Obras)