from django.contrib import admin
from .models import Article, Category

admin.site.register(Article)


class ArticleModel(admin.ModelAdmin):
    pass


admin.site.register(Category)
