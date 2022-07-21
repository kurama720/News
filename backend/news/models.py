from django.db import models
from backend.settings import BASE_DIR


def news_image_directory_path(instance, filename):
    return f'images/{filename}'


class News(models.Model):

    title = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey('Category', related_name='news', on_delete=models.SET_NULL, null=True)
    section = models.ForeignKey('Section', related_name='news', on_delete=models.SET_NULL, null=True)


    class Meta:

        verbose_name = 'News'
        verbose_name_plural = 'News'
        ordering = ('created_at', )

    def __str__(self) -> str:
        return self.title

    def set_image(self, file):
        Image.objects.create(
            news=self,
            local_url=file
        )

class Category(models.Model):

    name = models.CharField(max_length=40, unique=True)
    
    class Meta:

        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    def __str__(self) -> str:
        return self.name


class Section(models.Model):

    name = models.CharField(max_length=40, unique=True)

    class Meta:

        verbose_name = 'Section'
        verbose_name_plural = 'Sections'
    
    def __str__(self) -> str:
        return self.name


class Image(models.Model):
    local_url = models.ImageField(upload_to=news_image_directory_path, default='')
    news = models.ForeignKey('News', on_delete=models.CASCADE, null=True, related_name='img_content', blank=True)

    def __str__(self):
        return self.local_url.url