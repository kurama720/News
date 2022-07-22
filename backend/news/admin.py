from django.contrib import admin

from news.models import Category, Section, News, Image


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'category', 'section')
    ordering = ('created_at', )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', )
    ordering = ('name', )


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ('name', )
    ordering = ('name', )


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('image', )
    ordering = ('image', )
