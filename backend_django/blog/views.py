from django.shortcuts import render, get_object_or_404
from .models import Article


def index(request):
    articles = Article.objects.all()
    context = {"page_title": "index", "articles": articles}
    return render(request, "blog/index.html", context)


def article_detail(request, id):
    article = get_object_or_404(Article, pk=id)
    context = {"page_title": "article_ info", "article": article}
    return render(request, "blog/article_detail.html", context)
