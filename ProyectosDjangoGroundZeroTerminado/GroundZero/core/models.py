from django.db import models


# Create your models here.



# MODELO PARA CATEGORIA DE


class Categoria(models.Model):   
    idObra =models.IntegerField(primary_key=True, verbose_name='Id Obra')
    nombreCategoria = models.CharField(max_length=20, verbose_name='Categoria Obras')
   
    def __str__(self):
        return self.nombreCategoria


#modelo para Obras
        
class Obras(models.Model):
    nombre = models.CharField(max_length=20, primary_key=True, verbose_name='Nombre Obra')
    autor = models.CharField(max_length=20,  verbose_name='Autor')
    tecnica = models.CharField(max_length=20,  verbose_name='Tecnica')
    precio =models.IntegerField( verbose_name='Precio')
    dimension = models.CharField(max_length=20, null= True, blank=True, verbose_name='Dimension')
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)


    def __str__(self):
        return self.nombre