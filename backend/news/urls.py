from django.urls import path

from news.api.views import NewsListView, CategoryListView, SectionListView


urlpatterns = [
    path('', NewsListView.as_view(), name='news'),
    path('category', CategoryListView.as_view(), name='category'),
    path('section', SectionListView.as_view(), name='section'),
]
