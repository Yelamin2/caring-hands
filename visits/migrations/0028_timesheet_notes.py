# Generated by Django 4.1.2 on 2022-11-16 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0027_visitlog_notes'),
    ]

    operations = [
        migrations.AddField(
            model_name='timesheet',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]
