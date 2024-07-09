from django.urls import path
from .views import *

urlpatterns = [
    path('portfolio/projects/', all_projects),
    path('portfolio/projects/create/', create_project),
    path('portfolio/projects/<int:pk>/', one_project),
    path('portfolio/studycase/', studycase),
    path('portfolio/studycase/create/', create_studycase),
    path('skills/', all_skills),
    path('skills/create/', create_skills),
    path('skills/<int:pk>', one_skills)
]