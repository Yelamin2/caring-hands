# Generated by Django 4.1.2 on 2022-11-16 06:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0029_remove_timesheet_notes'),
        ('providers', '0003_invoice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoice',
            name='end_visit',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='invoice_end_visit', to='visits.visitlog'),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='start_visit',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='invoice_start_visit', to='visits.visitlog'),
        ),
    ]
