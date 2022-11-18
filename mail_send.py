from django.core.mail import send_mail

send_mail(
    subject='Hello from SparkPost',
    message='Woo hoo! Sent from Django!',
    from_email='from@yourdomain.com',
    recipient_list=['to@example.com'],
    html_message='<p>Hello Rock stars!</p>',
)