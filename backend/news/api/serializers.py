from email.mime import image
from rest_framework import serializers

from news.models import Category, News, Section, Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('local_url', )

        def to_representation(self, value):
            # try:
            url = value.local_url.url
            # except AttributeError:
            #     return None
            request = self.context.get('request', None)
            # if request is not None:
            return request.build_absolute_uri(url)
            # return url


class NewsSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
    )
    section = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
    )
    img_content = ImageSerializer(required=False)

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
        print(validated_data.get('img_content'))

        if validated_data.get('img_content').get('local_url'):
            instance.set_image(validated_data.get('img_content').get('local_url'))
        # instance.save()
        return instance


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = "__all__"