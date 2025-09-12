from django.urls import path, include
from .views import home, StudentViewSet, about
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('api/', include(router.urls)),
]
