from django import forms
from django.forms import ModelForm
from .models import Obras

class ObraForm(ModelForm):


    class Meta:
        model = Obras
        fields =['nombre','autor','tecnica','precio','dimension','categoria']  
      