from django.shortcuts import render
from .models import todo
from django.http import JsonResponse
#from django.views.decorators.csrf import csrf_exempt

# Create your views here.

#@csrf_exempt
def home(request):
        
        if request.method == 'POST' and 'add' in request.POST:
                item = 'items' in request.POST and request.POST['items']
                todos = todo(items = item)
                todos.save()

                t_data = todo.objects.values()
                todo_data = list(t_data)
                return JsonResponse({'status':'save','todo_data':todo_data})
        elif request.method == 'POST' and 'del' in request.POST:
                item_id = 'id' in request.POST and request.POST['id']
                todo.objects.get(pk=item_id).delete()
                return JsonResponse({'status':'deleted'})


               


        data = todo.objects.all()

        return render(request,'home.html',{'data':data})