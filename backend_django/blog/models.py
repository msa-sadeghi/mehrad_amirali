from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=200, verbose_name="نام")
    content = models.TextField(verbose_name="محتوا")
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=False)

    class Meta:
        verbose_name = "مقاله"
        verbose_name_plural = "مقالات"

    def __str__(self):
        return self.title
