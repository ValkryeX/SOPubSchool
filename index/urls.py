from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns =[
	path('', views.index, name = 'index'),
	path('timeline.html', views.timeline, name= 'timeline'),
]
urlpatterns += staticfiles_urlpatterns()
