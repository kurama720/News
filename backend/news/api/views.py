from rest_framework import viewsets
from rest_framework.response import Response

from news.models import News
from news.api.serializers import NewsSerializer

class NewsView(viewsets.ViewSet):

    def list(self, request):
        queryset = News.objects.all()
        serializer = NewsSerializer(queryset, many=True)

        return Response(serializer.data)