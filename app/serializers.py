from rest_framework.serializers import ModelSerializer
from .models import PortfolioProject, PortfolioStudyCase, Skill

class PortfolioProjectSerializer(ModelSerializer):

    class Meta:
        model = PortfolioProject
        fields = '__all__'


class PortfolioStudyCaseSerializer(ModelSerializer):

    class Meta:
        model = PortfolioStudyCase
        fields = '__all__'


class SkillSerializer(ModelSerializer):

    class Meta:
        model = Skill
        fields = '__all__'

