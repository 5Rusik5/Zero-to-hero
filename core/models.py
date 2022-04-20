from django.db import models
from django.contrib.auth.models import User
from .middleware import get_current_user
from django.db.models import Q
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

# Create your models here.
class Articles(models.Model):
    author = models.ForeignKey(User, on_delete = models.CASCADE, verbose_name='Article owner', blank = True, null = True )
    create_date = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=200, verbose_name='Post name:')
    picture = models.ImageField(upload_to="images",blank=True,null=True,  default='images/default/images.png')
    text = models.TextField(verbose_name='Text')
    
    def __str__(self):
        return self.name
    
    # class Meta:
    #     verbose_name='Статью'
    #     verbose_name_plural='Статьи'

class StatusFilterComments(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(Q(status=False, author = get_current_user()) | Q(status=False, article__author=get_current_user()) | Q(status=True))
    


class Comments(models.Model):
    article = models.ForeignKey(Articles, on_delete = models.CASCADE, verbose_name='Post', blank = True, null = True,related_name='comments_articles' )
    author = models.ForeignKey(User, on_delete = models.CASCADE, verbose_name='Comment author', blank = True, null = True )
    create_date = models.DateTimeField(auto_now=True)
    text = models.TextField(verbose_name='Text comment')
    status = models.BooleanField(verbose_name='Post Visibility', default=False)
    objects  = StatusFilterComments()


class Chat(models.Model):
    DIALOG = 'D'
    CHAT = "C"
    CHAT_TYPE_CHOICES = (
        (DIALOG, _('Dialog')),
        (CHAT, _('Chat'))
    )

    type = models.CharField(_('Тип'), max_length=1,choices=CHAT_TYPE_CHOICES,default=DIALOG)
    members = models.ManyToManyField(User, verbose_name=_('Member'))

    # @models.permalink
    def get_absolute_url(self):
        return 'users:message', (), {'chat_id': self.pk}

class Message(models.Model):
    chat = models.ForeignKey(Chat, verbose_name=_('Chat'), on_delete = models.CASCADE)
    author = models.ForeignKey(User, verbose_name=_('User'), on_delete = models.CASCADE)
    message = models.TextField(_("Message date"), default=timezone.now)
    is_readed = models.BooleanField(_('Readed'), default=False)

    class Meta:
        ordering=['pub_date']
    
    def __str__(self):
        return self.message