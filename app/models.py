from django.db import models

PROJECT_UI_CHOICES = [
    ('normal', 'normal'),
    ('detailed', 'detailed'),
    ('simple', 'simple')
]


def upload_to(self, filename):
    return 'projects/{filename}'.format(filename=filename)

class PortfolioProject(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(max_length=240, blank=False, null=False)
    skills = models.TextField(blank=False, null=False)
    link = models.TextField(blank=False, null=False)
    repo_link = models.TextField(blank=False, null=False)
    image = models.TextField(blank=True, null=True)
    project_ui = models.CharField(max_length=20, choices=PROJECT_UI_CHOICES, blank=False, null=False)

WORKTIME_CHOICES = [
    ('1-3 weeks', '1-3 weeks'),
    ('1 month', '1 month'),
    ('2-3 months', '2-3 months'),
    ('3-6 months', '3-6 months')
]

class PortfolioStudyCase(models.Model):
    project_name = models.CharField(max_length=50, blank=False, null=False)
    project_description = models.TextField(blank=False, null=False)
    project_workflow = models.TextField(blank=False, null=False)
    project_link = models.TextField(blank=False, null=False)
    project_repo = models.TextField(blank=False, null=False)
    work_time = models.CharField(max_length=50, choices=WORKTIME_CHOICES, default=WORKTIME_CHOICES[0])
    chosen = models.BooleanField(blank=False, null=False, default=False)


class Skill(models.Model):
    category = models.CharField(max_length=50, null=False, blank=False)
    skills = models.TextField(null=False, blank=False)
    aggregative_project = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.category 