from rest_framework import generics
from .models import CartItem
from .serializers import CartItemSerializer
from rest_framework.permissions import IsAuthenticated

class CartListView(generics.ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)
    
    
class AddToCartView(generics.CreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated] 
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
        
        
class DeleteCartItemView(generics.DestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)           
    