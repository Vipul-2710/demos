from django.urls import path, include
from .views import home, StudentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', home, name='home'),
    path('api/', include(router.urls)),
]
