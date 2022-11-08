# Generated by Django 4.1.2 on 2022-11-07 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_customuser_expiration'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='company_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='license',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
