from django.shortcuts import redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework.request import Request
from .models import *
from .serializers import *

import json


def parse_skills(obj):
    obj['skills'] = json.loads(obj['skills'])

    return obj

@api_view(['GET'])
@permission_classes([AllowAny])
def all_projects(request):
    projects = PortfolioProject.objects.all().order_by('id')
    serializer = PortfolioProjectSerializer(instance=projects, many=True)
    data = map(parse_skills, serializer.data)

    return Response(data=data, status=200)


@api_view(['GET'])
@permission_classes([AllowAny])
def all_skills(request):
    skills = Skill.objects.all()
    serializer = SkillSerializer(instance=skills, many=True)
    data = map(parse_skills, serializer.data)

    return Response(data=data, status=200)

@api_view(['GET'])
@permission_classes([AllowAny])
def studycase(request):
    try:
        studycase = PortfolioStudyCase.objects.filter(chosen=True)[0]
        serializer = PortfolioStudyCaseSerializer(instance=studycase)
        data = serializer.data
        data['project_workflow'] = json.loads(data['project_workflow'])


        return Response(data=data, status=200)

    except IndexError:
        return Response(status=204)
    


@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_project(request):
    data = request.data

    data['skills'] = json.dumps(data['skills'])

    serializer = PortfolioProjectSerializer(data=data)
    if serializer.is_valid():
        serializer.save()

        return Response(data=serializer.data, status=201)

    return Response(data=serializer.error_messages, status=400)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_skills(request):
    data = request.data
    data['skills'] = json.dumps(data['skills'])

    serializer = SkillSerializer(data=data)
    if serializer.is_valid():
        serializer.save()

        return Response(data=serializer.data, status=201)

    return Response(data=serializer.error_messages, status=400)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_studycase(request):
    data = request.data
    data['project_workflow'] = json.dumps(data['project_workflow'])

    serializer = PortfolioStudyCaseSerializer(data=data)
    if serializer.is_valid():
        serializer.save()

        return Response(data=serializer.data, status=201)

    return Response(data=serializer.error_messages, status=400)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAdminUser])
def one_project(request, pk):
    if request.method == 'GET':
        try:
            project = PortfolioProject.objects.get(id=pk)
            serializer = PortfolioProjectSerializer(instance=project)


            return Response(data=serializer.data, status=200)
        
        except PortfolioProject.DoesNotExist:
            return Response(status=404)

    if request.method == 'PATCH':
        project = PortfolioProject.objects.get(id=pk)
        data = request.data
        
        if 'skills' in data.keys():
            data['skills'] = json.dumps(data['skills'])

        serializer = PortfolioProjectSerializer(instance=project, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data, status=202)
    
        return Response(data=serializer.error_messages, status=400)
        

    if request.method == 'DELETE':
        project = PortfolioProject.objects.get(id=pk)
        project.delete()

        return Response(status=204)

    return Response(status=404)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAdminUser])
def one_skills(request, pk):
    if request.method == 'GET':
        skills_set = Skill.objects.get(id=pk)
        serializer = SkillSerializer(instance=skills_set)

        return Response(data=serializer.data, status=200)

    if request.method == 'PATCH':
        data = request.data

        if 'skills' in data:
            data['skills'] = json.dumps(data['skills'])

        skills_set = Skill.objects.get(id=pk)
        serializer = SkillSerializer(instance=skills_set, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data, status=202)

        return Response(status=400)


    if request.method == 'DELETE':
        skills_set = Skill.objects.get(id=pk)
        skills_set.delete()

        return Response(status=204)

    return Response(status=404)


@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAdminUser])
def one_studycase(request):
    if request.method == 'GET':
        pass

    if request.method == 'PATCH':
        project = PortfolioStudyCase.objects.filter(chosen=True)[0]
        data = request.data

        if 'project_workflow' in data.keys():
            data['project_workflow'] = json.dumps(data['project_workflow'])

        serializer = PortfolioStudyCaseSerializer(instance=project, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data, status=202)
        

    if request.method == 'DELETE':
        project = PortfolioStudyCase.objects.filter(chosen=True)[0]
        project.delete()

        return Response(status=204)

    return Response(status=404)
