# Generated by Django 4.1.2 on 2022-11-14 21:59

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('visits', '0014_alter_timesheet_weekday'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='timesheet',
            name='weekday',
        ),
        migrations.AlterField(
            model_name='timesheet',
            name='end_time',
            field=models.TimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='timesheet',
            name='start_time',
            field=models.TimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='timesheet',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_name', to=settings.AUTH_USER_MODEL),
        ),
    ]