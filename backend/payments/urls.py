from django.urls import path
from .views import PaystackInitializePaymentView, PaystackVerifyPaymentView

urlpatterns = [
    path('checkout/', PaystackInitializePaymentView.as_view()),
    path('verify/<str:reference>/', PaystackVerifyPaymentView.as_view()),
]