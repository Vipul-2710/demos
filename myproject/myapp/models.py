from django.db import models

# Create your models here.
# Students => table
# Fields => columns/attributes

class Students(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    grade = models.CharField(max_length=10)
    inputText = models.CharField(max_length=500, default='')

    def __str__(self):
        return self.name