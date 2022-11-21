# from django.core.mail import send_mail
# import os
# from sendgrid import SendGridAPIClient
# from sendgrid.helpers.mail import Mail

# from django.conf import settings

# # from django.core.mail import send_mail

# # send_mail(
# #     'Subject My test',
# #     'Here is the message. Using SendGrid from Django',
# #     'yelamin2@gmail.com',
# #     ['yelamin2@yahoo.com'],
# #     fail_silently=False,
# # )

# message = Mail(
#     # from_email='yelamin2@gmail.com',
#     # to_emails='yelamin2@yahoo.com',
#     # subject='Sending with Twilio SendGrid is Fun',
#     # html_content='<strong>and easy to do anywhere, even with Python</strong>'
#     )
# try:
#     sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
#     response = sg.send(message)
#     print(response.status_code)
#     print(response.body)
#     print(response.headers)
# except Exception as e:
#     print(e.message)
