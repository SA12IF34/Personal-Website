from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='dist/index.html')),
    path('apis/', include('app.urls'))


]+static(settings.STATICFILES_DIRS[1], document_root=settings.STATIC_ROOT)

REACT_ROUTES = [
    'skills',
    'portfolio',
    'profession',
    'about',
    'contact'
]

for route in REACT_ROUTES:
    urlpatterns.append(path(f'{route}/', TemplateView.as_view(template_name='dist/index.html')))