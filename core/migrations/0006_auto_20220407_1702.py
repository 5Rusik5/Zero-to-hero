# Generated by Django 3.2.12 on 2022-04-07 11:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0005_comments'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='articles',
            options={},
        ),
        migrations.AlterField(
            model_name='articles',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Article owner'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='name',
            field=models.CharField(max_length=200, verbose_name='Post name:'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='text',
            field=models.TextField(verbose_name='Text'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='article',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments_articles', to='core.articles', verbose_name='Post'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Comment author'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='status',
            field=models.BooleanField(default=False, verbose_name='Post Visibility'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='text',
            field=models.TextField(verbose_name='Text comment'),
        ),
    ]
