from django.contrib import admin
from .models import Offers


@admin.register(Offers)
class OffersAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'date']
    list_display_links = ['id', 'email']
    list_filter = ['email']
