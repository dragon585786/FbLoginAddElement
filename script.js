var data = [
    {
        username: "salim" ,
        password : "salim585786" 

    }
] ;
 var news = [
     {
         username: "boby" ,
         timeline: "bal , bla, bla" 

     }
 ] ;
 var user = prompt("enter user name pleasre");
 var pass = prompt("enter user pass pleasre");

 if (user === data[0].username && pass === data[0].password)
 {
     alert("you are log in broo");
 }
 else {
     alert("invalid input broo");
 }

 var button = document.getElementsByTagName("button")[0];

 button.style.background = "yellow";
 button.style.color = "red";

 button.addEventListener("click",function(){
    alert("i said you dont touch me you fool");
 });

var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

var f = function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

 button.addEventListener("click",function(){
    if (input.value.length > 0) 
    {
        f();
    }
    else {
        input.value="pehle kuch likh yaha you fool!!!";
        
    }
    

    

});


    input.addEventListener("kyepress", function(event){

       if (input.value.length > 0 && event.which === 13 ) 
    {
        f();
    }
    else {
        input.value="pehle kuch likh yaha you fool!!!";
        
    }
  });
