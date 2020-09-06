from django.forms import ModelForm
from .models import Offers


class OffersForm(ModelForm):
    class Meta:
        model = Offers
        fields = '__all__'
