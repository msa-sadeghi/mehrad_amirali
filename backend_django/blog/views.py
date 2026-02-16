from django.shortcuts import render
from .models import Article


def index(request):
    articles = Article.objects.all()
    context = {"page_title": "index", "articles": articles}
    return render(request, "blog/index.html", context)
