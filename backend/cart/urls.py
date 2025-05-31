from django.urls import path
from .views import CartListView, AddToCartView, DeleteCartItemView



urlpatterns = [
    path('', CartListView.as_view()),
    path('add/', AddToCartView.as_view()),
    path('delete/<int:pk>/', DeleteCartItemView.as_view())
]



