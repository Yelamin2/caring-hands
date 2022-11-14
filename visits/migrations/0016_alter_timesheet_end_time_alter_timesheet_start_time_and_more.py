# Generated by Django 4.1.2 on 2022-11-14 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0015_alter_timesheet_user_alter_timesheet_weekday'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timesheet',
            name='end_time',
            field=models.TimeField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='timesheet',
            name='start_time',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='timesheet',
            name='weekday',
            field=models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=20),
        ),
    ]
