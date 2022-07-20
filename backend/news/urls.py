from django.urls import path

from news.api.views import NewsView


urlpatterns = [
    path('', NewsView.as_view({'get': 'list'}), name='news')
]