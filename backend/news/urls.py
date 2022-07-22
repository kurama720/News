from django.urls import path

from news.api.views import NewsListView, CategoryListView, SectionListView, NewsGetImage


urlpatterns = [
    path('', NewsListView.as_view(), name='news'),
    path('category', CategoryListView.as_view(), name='category'),
    path('section', SectionListView.as_view(), name='section'),
    path('<int:pk>/image', NewsGetImage.as_view(), name='image'),
]
