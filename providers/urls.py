from django.urls import include, path
from .views import MessagesListAPIView, InvoiceListAPIView

urlpatterns = [
    path('messages/',MessagesListAPIView.as_view(), name= 'messages'),
    path('invoice/<int:client>/', InvoiceListAPIView.as_view(), name='invoice'),
    

    
   
]