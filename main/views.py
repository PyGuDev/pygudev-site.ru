from django.shortcuts import render
from django.contrib import messages
from .forms import OffersForm


def index(request):
    form = OffersForm()
    if request.method == 'POST':
        form = OffersForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Запрос отправлен')
    return render(request=request, template_name='index.html')
