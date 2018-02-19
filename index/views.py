from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import News

# Create your views here.

def index (request):
	latest_news = News.objects.all()
	template = loader.get_template('index/index.html')
	context = {
		'latest_news' : latest_news,
	}
	return HttpResponse(template.render(context, request))
def timeline(request):
	template = loader.get_template('index/timeline.html')
	context = {	}
	return HttpResponse(template.render(context,request))