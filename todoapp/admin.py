from django.contrib import admin
from .models import todo


admin.site.site_header = 'PYTHONWORLD'
admin.site.index_title = 'PYTHONWORLD'
admin.site.site_title = 'django'


# Register your models here.
@admin.register(todo)
class AdminTodo(admin.ModelAdmin):
        list_display = ['id','items']
    
