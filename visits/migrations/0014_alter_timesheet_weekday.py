# Generated by Django 4.1.2 on 2022-11-12 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0013_alter_timesheet_weekday'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timesheet',
            name='weekday',
            field=models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thrusday', 'Thrusday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], default='', max_length=20),
        ),
    ]
