from django.shortcuts import render
from rest_framework.views import APIView
from .models import React
from .serializers import ReactSerializer
from rest_framework.response import Response

class ReactView(APIView):
    def get(self, request):
        output = [{"first_name": output.first_name, "last_name": output.last_name, "email": output.email, "password": output.password} for output in React.objects.all()]
        
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
