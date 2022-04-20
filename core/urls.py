from django.contrib import admin
from django.urls import path, re_path
from core import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('', views.post_list, name='home'),
    path('detail/<int:pk>', views.HomeDetailView.as_view(), name='detail_page'),
    path('edit-page', views.ArticleCreateView.as_view(), name='edit_page'),
    path('update-page/<int:pk>', views.ArticleUpdateView.as_view(), name='update_page'),
    path('delete-page/<int:pk>', views.ArticleDeleteView.as_view(), name='delete_page'),
    path('login', views.MyprojectLoginView.as_view(), name='login_page'),
    path('register', views.RegisterUserView.as_view(), name='register_page'),
    path('logout', views.MyProjectLogout.as_view(), name='logout_page'),
    path('<str:post_name>/share/', views.post_share, name='post_share'),
    path('<str:user_name/edit/', views.user_edit, name = "user_edit"),
    path('search/', views.search, name = "search_results"),
    #url password reset application urls.py
    path('password_reset/<str:name>/', views.password_reset_form, name="password_reset"),
    path('chat/', views.chat, name = "chat"),
    path("chat/<str:room_name>/", views.room, name = "room"),
    #ajax
    path('update_comment_status/<int:pk>/<slug:type>', views.update_comment_status, name='update_comment_status'),

    # urls for chat 
    re_path(r'^dialog/$', login_required(views.DialogsView.as_view()), name='dialog'),
    #re_path(r'^dialog/create/(?P<user_id\d+)/$', login_required(views.CreateDialogView.as_view()), name='create_dialog'),
    #re_path(r'^dialogs/(?P<chat_id>\d+)/$', login_required(views.MessageView.as_view()), name="message"),

]
