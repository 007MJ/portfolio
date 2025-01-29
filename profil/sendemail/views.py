from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

def home(request):
    return render(request, 'sendemail/home.html')


def about(request):
    return render(request, 'sendemail/about.html')

def contact(request):
    context = {}
    replis_custome = "you received the message from: \n"
    if request.method == "POST":
        address = request.POST.get('address')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        print(" message " + message + " subject " + subject + " address " + address)
        if address and subject and message:
            try:
                replis_custome = replis_custome + address + '\n' + message
                send_mail(subject, replis_custome, settings.EMAIL_HOST_USER, [settings.DEFAULT_EMAIL])
                print("sending email ::::::::::")
                context['result'] = 'Email send successfuly'
            except Exception as er:
                print("sending email error ::::::::::")
                context['result'] = f'Error sending email: {er}'
            else:
                print("sending email error pas rempli ::::::::::")
                context['result'] = f'All fields are required'
    return render(request, 'sendemail/contact.html', context)

def projects(request):
    return render(request, 'sendemail/projects.html')