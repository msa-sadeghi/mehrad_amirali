from django.urls import path
from .views import index, article_detail

app_name = "blog"
urlpatterns = [
    path("", index, name="index"),
    path("article/<int:id>/", article_detail, name="article_detail"),
]
