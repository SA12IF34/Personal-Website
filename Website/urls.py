from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='dist/index.html')),
    path('apis/', include('app.urls')),
    re_path(r'^mediafiles/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

REACT_ROUTES = [
    'skills',
    'portfolio',
    'profession',
    'about',
    'contact',
    'more/Logo',
    'more/AncientProjects'
]

for route in REACT_ROUTES:
    urlpatterns.append(path(f'{route}/', TemplateView.as_view(template_name='dist/index.html')))