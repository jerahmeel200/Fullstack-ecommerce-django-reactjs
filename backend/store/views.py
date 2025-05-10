# store/views.py

from rest_framework import generics
from rest_framework.views import APIView  # ✅ Corrected import
from rest_framework.response import Response
from rest_framework import status  # ✅ For explicit status codes
from django.shortcuts import get_object_or_404

from .models import Product, Cart, CartItem
from .serializers import ProductSerializer, CartSerializer


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# added
class CartView(APIView):
    def get(self, request, session_id):
        cart, _ = Cart.objects.get_or_create(session_id=session_id)
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)

    def post(self, request, session_id):
        product_id = request.data.get("product_id")
        quantity = int(request.data.get("quantity", 1))  # ✅ Cast to int

        cart, _ = Cart.objects.get_or_create(session_id=session_id)
        product = get_object_or_404(Product, id=product_id)

        item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        if not created:
            item.quantity += quantity
        else:
            item.quantity = quantity
        item.save()

        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)

    def delete(self, request, session_id):
        item = get_object_or_404(CartItem, id=request.data.get("item_id"))  # ✅ Renamed variable
        item.delete()
        return Response({"message": "Item removed from cart."}, status=status.HTTP_204_NO_CONTENT)
