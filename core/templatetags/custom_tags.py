from django import template
from ..models import Notification

register = template.Library()

@register.inclusion_tag('notification.html', takes_context=True)
def show_notifications(context):
    user = context['request'].user
    notifications = Notification.objects.filter(user_to = user).exclude(user_has_seen=True).order_by('-date')
    
    # for i in notifications: 
    #     if(i.user_has_seen == False):
    #        notifications.update(user_has_seen = True)
    return {'notifications': notifications}

@register.simple_tag
def total_unread_notifs(r_user):
    user = r_user
    total = Notification.objects.filter(user_to=user, user_has_seen=False).count()
    return total

@register.simple_tag
def notif_seen(r_user):
    user = r_user
    unseen = Notification.objects.filter(user_to=user, user_has_seen=False)
    for i in unseen:
        i.update(user_has_seen = True)
        total_unread_notifs(r_user)
        

