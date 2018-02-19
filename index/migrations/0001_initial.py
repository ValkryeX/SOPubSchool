# Generated by Django 2.0.2 on 2018-02-09 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('news_head', models.CharField(max_length=150, verbose_name='News Heading')),
                ('news_desc', models.CharField(max_length=300, verbose_name='News Description')),
            ],
        ),
    ]