from django.db import models


class Offers(models.Model):
    email = models.EmailField('Email')
    text = models.TextField('Текст сообщения')
    date = models.DateTimeField('Дата создания', auto_created=True, auto_now=True)

    def __str__(self):
        return self.email