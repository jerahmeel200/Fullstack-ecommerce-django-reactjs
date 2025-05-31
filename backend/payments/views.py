import requests
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework  import status

class PaystackInitializePaymentView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        amount = request.data.get('amount')
        email = request.user.email
        
        headers = {
            'Authorization': f"Bearer {settings.PAYSTACK_SECRET_KEY}",
            "content-type": "application/json"
        }
        
        data ={
            'email': email,
            "amount": int(amount) * 100
        }
        
        response = requests.post(
            'https://api.paystack.co/transaction/initialize',
            headers=headers,
            json=data
        )
        if response.status_code == 200:
            return Response(response.json(), status=status.HTTP_200_OK)
        
        return Response(response.json(), status=response.status_code)
    
class PaystackVerifyPaymentView(APIView): 
    permission_classes = [IsAuthenticated]
    
    def get(self, request, reference):
        headers = {
            'Authorization': f"Bearer {settings.PAYSTACK_SECRET_KEY}",
            "Content-Type": "application/json"
        }   
        response = requests.get(
            f'https://api.paystack.co/transaction/verify/{reference}',
            headers=headers
        )
        if response.status_code == 200:
            return Response(response.json(), status=status.HTTP_200_OK)
        return Response(response.json(), status=response.status_code)