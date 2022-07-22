from rest_framework import serializers

from news.models import Category, News, Section, Image


class NewsSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
    )
    section = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = News
        fields = "__all__"

    def create(self, validated_data):
        category = validated_data.get('category')
        section = validated_data.get('section')

        instance = News.objects.create(
            title=validated_data.get('title'),
            description=validated_data.get('description'),
            category=category if category else None,
            section=section if section else None
        )

        return instance


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = "__all__"