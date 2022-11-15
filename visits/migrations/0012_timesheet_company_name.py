# Generated by Django 4.1.2 on 2022-11-12 00:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('visits', '0011_remove_timesheet_company_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='timesheet',
            name='company_name',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='time_sheet', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]