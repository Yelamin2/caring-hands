# Generated by Django 4.1.2 on 2022-11-15 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0023_alter_visitlog_notes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visitlog',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]
