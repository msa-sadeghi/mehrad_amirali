from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="نام")
    slug = models.SlugField()

    def __str__(self):
        return self.name


class Article(models.Model):
    STATUS_CHOICES = (("draft", "پیش نویس"), ("published", "منتشر شده"))
    title = models.CharField(max_length=200, verbose_name="نام")
    content = models.TextField(verbose_name="محتوا")
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # published = models.BooleanField(default=False)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="articles", default=1
    )
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default="draft")
    views = models.PositiveIntegerField(default=0)

    def publish(self):
        self.status = "published"
        self.save()

    class Meta:
        verbose_name = "مقاله"
        verbose_name_plural = "مقالات"

    def __str__(self):
        return self.title
