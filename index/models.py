from django.db import models

# Create your models here.

class News(models.Model):
	news_head = models.CharField('News Heading', max_length = 150)
	news_desc = models.CharField('News Description', max_length = 300)
	def __str__(self):
		return self.news_head