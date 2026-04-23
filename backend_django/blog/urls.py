from django.urls import path

# from .views import index, article_detail, ArticleListView
# from .views import article_detail, ArticleListView, ArticleDetailView
from .views import ArticleListView, ArticleDetailView

app_name = "blog"
urlpatterns = [
    # path("", index, name="index"),
    path("", ArticleListView.as_view(), name="index"),
    # path("article/<int:id>/", article_detail, name="article_detail"),
    path("article/<int:id>/", ArticleDetailView.as_view(), name="article_detail"),
]
