from django.shortcuts import render, get_object_or_404
from .models import Article
from django.views.generic import ListView, DetailView

# def index(request):
#     articles = Article.objects.all()
#     context = {"page_title": "index", "articles": articles}
#     return render(request, "blog/index.html", context)


class ArticleListView(ListView):
    model = Article
    template_name = "blog/index.html"
    context_object_name = "articles"


# def article_detail(request, id):
#     article = get_object_or_404(Article, pk=id)
#     article.views += 1
#     article.save(update_fields=["views"])

#     related_articles = Article.objects.filter(
#         category=article.category, status="published"
#     ).exclude(id=article.id)[:3]

#     context = {
#         "page_title": "article_ info",
#         "article": article,
#         "related_articles": related_articles,
#     }
#     return render(request, "blog/article_detail.html", context)


class ArticleDetailView(DetailView):
    model = Article
    template_name = "blog/article_detail.html"
    context_object_name = "article"
    pk_url_kwarg = "id"
