from django.db import models


def news_image_directory_path(instance, filename):
    return 'images/news/' + filename


class News(models.Model):

    title = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey('Category', related_name='news', on_delete=models.SET_NULL, null=True, blank=True)
    section = models.ForeignKey('Section', related_name='news', on_delete=models.SET_NULL, null=True)
    image = models.ForeignKey('Image', on_delete=models.SET_NULL, null=True, related_name='a_news', blank=True)

    class Meta:

        verbose_name = 'News'
        verbose_name_plural = 'News'
        ordering = ('created_at', )

    def __str__(self) -> str:
        return self.title


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
    image = models.ImageField(upload_to=news_image_directory_path, default='')

    def __str__(self):
        return self.image.name
