# Generated by Django 4.0.6 on 2022-07-21 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0009_rasmlar'),
    ]

    operations = [
        migrations.AddField(
            model_name='tassurotlar',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]