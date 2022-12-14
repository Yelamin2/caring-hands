# Generated by Django 4.1.2 on 2022-11-15 15:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('visits', '0024_alter_visitlog_notes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='visitlog',
            name='company_name',
        ),
        migrations.AddField(
            model_name='visitlog',
            name='client',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='client_visits', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='visitlog',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='provider_visits', to=settings.AUTH_USER_MODEL),
        ),
    ]
