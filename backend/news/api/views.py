from django.shortcuts import get_object_or_404
from rest_framework import viewsets, views
from rest_framework.generics import ListCreateAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend


from news.models import News, Category, Section
from news.api.serializers import NewsSerializer, CategorySerializer, SectionSerializer


class NewsListView(ListCreateAPIView):

    queryset = News.objects.order_by('-created_at')
    serializer_class = NewsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category__name', 'section__name']

    def perform_create(self, serializer):
        category = Category.objects.filter(name=self.request.data.get('category')).first()
        section = Section.objects.filter(name=self.request.data.get('section')).first()

        serializer.save(
                title=self.request.data.get('title'),
                description=self.request.data.get('description'),
                category=category if category else None,
                section=section if section else None,
            )


class CategoryListView(ListCreateAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SectionListView(ListCreateAPIView):

    queryset = Section.objects.all()
    serializer_class = SectionSerializer
