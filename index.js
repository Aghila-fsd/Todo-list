var username=document.getElementById("uname");
var password=document.getElementById("password");
var unameerror=document.getElementById("unameerror");
var pwderror=document.getElementById("passworderror");


function user()
{
    if(username.value=="admin"){
        unameerror.innerHTML="";
        pwderror.innerHTML="";
        return true;
    }else{
        unameerror.innerHTML="username:admin";
        unameerror.style.color="red";
        return false;
    }
}
function pass()
{
    if(password.value=="12345"){
        pwderror.innerHTML="";
        return true;
    }else{
           pwderror.innerHTML=="12345";
           pwderror.style.color="red";
           return false;
    }
}
function validate(callback){
    if(user() && pass())
    {
        callback();
    }else{
        return false;
    }
}
function login()
{
    window.open("todo.html");
    return true;
}