# Generated by Django 4.1.2 on 2022-11-16 17:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0009_messages_sender'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='invoice',
            name='end_visit',
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='start_visit',
        ),
    ]
