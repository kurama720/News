import base64

from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, GenericAPIView
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


class NewsGetImage(GenericAPIView):

    @staticmethod
    def get_image_base64(a_news):
        news_image = a_news.image

        if news_image:
            image = news_image.image
            encoded_string = base64.b64encode(image.read()).decode('utf-8')

            return encoded_string

    def get(self, request, pk):
        a_news = get_object_or_404(News, id=pk)
        body = self.get_image_base64(a_news)
        return HttpResponse(body, status=status.HTTP_200_OK)
