from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Students
from .forms import StudentForm
from rest_framework import viewsets
from .serializers import StudentSerializer
import google.generativeai as genai

genai.configure(api_key="AIzaSyDns_DZ1H70wLydCNiapvsWO6BLCQggsQ0")
model = genai.GenerativeModel("models/gemini-1.5-flash-latest")

# Create your views here.
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
def home(request):
    students = Students.objects.all() # Query to fetch all students from the database
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form_data = form.cleaned_data
            ai_input = form_data['inputText']
            response = model.generate_content(ai_input)
            ai_output = response.text
            form.save()  # Save the new student to the database
            return render(request, 'home.html', {'students': students , 'form': form, 'ai_output' : ai_output})
    else:
        form = StudentForm()
    return render(request, 'home.html', {'students': students , 'form': form, 'ai_output' : ""})

def about(request):
    print(dir(request))   
    return HttpResponse('<h1 style="color:pink; background-color:aqua">this is about page</h1>')