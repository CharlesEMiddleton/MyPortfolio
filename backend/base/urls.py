from django.urls import path
from .views import ReactView

urlpatterns = [
    path('ReactView/', ReactView.as_view(), name='ReactView'),
]
