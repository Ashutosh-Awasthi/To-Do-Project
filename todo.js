var list = document.querySelector(".list");
var icon = document.querySelectorAll("span");
var plus = document.querySelector(".fa-plus");
var addnew=document.querySelector(".addnew");
var inp=document.querySelector("input");
var ispresent = true;

plus.addEventListener("click",function(){
    if(ispresent)
        {
            addnew.classList.remove("fadein");
            addnew.classList.add("fadeout");
            ispresent=false;
        }
    else
        {
            addnew.classList.remove("fadeout");
            addnew.classList.add("fadein");
            ispresent=true;
        } 
});

list.addEventListener("click",function(e){
    var x = e.target;
    if(x.tagName=="P")
        x.classList.toggle("strike");
    if(x.tagName=="SPAN")
    {
        x.parentNode.classList.add("fadeout");
        setTimeout(() => {
            x.parentNode.remove();
        }, 400);
    }
    if(x.tagName=="I")
    {
        x.parentNode.parentNode.classList.add("fadeout");
        setTimeout(() => {
            x.parentNode.parentNode.remove();
        }, 400);
    }
        e.stopPropagation();
});

inp.addEventListener("keypress",function(e){
    if(e.key=="Enter")
    {
        var val=inp.value;
        inp.value="";
        var ele=document.createElement("p");
        ele.innerHTML="<span><i class='fas fa-trash icon'></i></span>"+val;
        document.querySelector(".list").append(ele);
        var list=document.querySelectorAll("p");
    }
});