from django import forms
from .models import Students

class StudentForm(forms.ModelForm):
    class Meta:
        model = Students
        fields = '__all__'  # ['name', 'age', 'grade', 'inputText']