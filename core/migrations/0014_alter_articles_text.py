# Generated by Django 4.0.4 on 2022-04-29 02:20

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_articles_likes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='text',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
