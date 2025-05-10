# store/urls.py
from django.urls import path
from .views import ProductList, CartView

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    # added
    path('cart/<str:session_id>/', CartView.as_view()),
]

