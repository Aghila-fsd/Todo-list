$('#welcomeText').html(`Hello ${currentUser.uname}! <br> Welcome to your 'ToDo' List`);
function ajax(){


    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4&this.status==200)
        {
            var response=JSON.parse(this.responseText);
            //console.log(response);
        
        
            var output="";
            output+=`<tr>`
            output+=`<th>title</th>`;
            output+=`<th>status</th>`;
            output+=`</tr>`
            
            for(i=0;i<response.length;i++)
            {
                  if(response[i].completed==true){
                      output+=`
                      <tr>
                      <td>${response[i].title}</td>
                      <td><input type="checkbox" checked class="largerCheckbox" disabled></td>
                      </tr>`;
                  }else{
                    output+=`
                    <tr>
                    <td>${response[i].title}</td>
                    <td><input id="check" type="checkbox" class="largerCheckbox"></td>
                    </tr>`;
                  }
                  
        }
                console.log(output)
                document.getElementById("table").innerHTML=output;
        
    
    //console.log(count)
    var count=0;
    console.log(count);
    $(document).ready(function(){
        $("#table").on("change",":checkbox", 
        function(){
           // var count=0;
            var status=this.checked;
            
            var promise=new Promise(function(resolve,reject){
                //var count=0;
               if (status===true)
               {
                  count++;

                }
                console.log(count);
             if(count==5)
                {
                    console.log(count);
                resolve();
                }
            })
                promise.then(function(){
                 alert("congrats 5 tasks successfully completed !");


                });

        });
    })
 }
 }
xhttp.open("Get","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}