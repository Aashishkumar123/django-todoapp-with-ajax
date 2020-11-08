  
  //add and show items 
  $(document).ready(function() {
               
                $('#add-btn').click(function(){
                var output = "";
                var item = $('#items').val();
                var csr = $("input[name=csrfmiddlewaretoken").val(); 
                console.log(csr);

                if (item==""){
                        $('.msg').html('*Fields cannot be Empty');
                }
                else{
                       var mydata = {items:item,csrfmiddlewaretoken:csr,add:"add"}
                        
                $.ajax({
                        url: "{%url 'home' %}",
                        type: "POST",
                        data: mydata,
                        dataType : 'json',
                        success: function(data) {
                                x = data.todo_data 
                                console.log("save successfully"); 
                                console.log(x);
                                for(i=0;i<x.length;i++){
                                output += "<tr><td>" + x[i].id + "</td><td>" + x[i].items + "</td><td>  <button class='btn btn-sm btn-danger' id='delete' data-sid =" + x[i].id + ">"+ "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'" + ">" +
                "<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'" + "/>" +
                "<path fill-rule='evenodd' d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z'" + "/>" +
              "</svg>" + "</button>"
                                }

                                $('#tbody').html(output);
                                $('.msg').html('Item Added Successfully');
                        }
                       
                });
                        
                }

                });

                });

// Delete Items

$(document).ready(function(){

        $('#tbody').on("click","#delete",function(){

                var id = $(this).attr('data-sid');
                console.log(id);

                var csr = $("input[name=csrfmiddlewaretoken").val(); 
                var delete_id = {id:id,csrfmiddlewaretoken:csr,del:'del'};
                mythis = this;
                $.ajax({
                        type: "POST",
                        url: "{% url 'home'%}",
                        data: delete_id,
                        dataType: "json",
                        success: function (data) {
                                console.log('data deleted successfully');
                                $(mythis).closest("tr").fadeOut();
                                $('.msg').html('Item Deleted Successfully');
                                
                        }
                });



        });

});



