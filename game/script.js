let buttons=document.querySelectorAll(".block");
let start=document.getElementById("display");
let cont=start.innerHTML;
let arr=[];
for(let num=1;num<=9;num++){
arr.push(document.getElementById(String(num)));//you can write num without String




}

function startgame(){
if(start.innerText!="X"&&start.innerText!="O")

{
setInterval(()=>{
start.innerText+=".";
},1000)
setTimeout(() => {
    location.reload();
    
},3000);
}}
function winner(){
if(arr[0].innerText==arr[1].innerText&&arr[1].innerText==arr[2].innerText&&arr[0].innerText!="")
{start.innerText=arr[0].innerText+" is winner";
start.style.paddingLeft="20px";

}

else if(arr[3].innerText==arr[4].innerText&&arr[4].innerText==arr[5].innerText&&arr[3].innerText!="")
{start.innerText=arr[3].innerText+" is winner";
start.style.paddingLeft="20px";
}
else if(arr[6].innerText==arr[7].innerText&&arr[7].innerText==arr[8].innerText&&arr[6].innerText!="")
{start.innerText=arr[6].innerText+" is winner";
start.style.paddingLeft="20px";
}
else if(arr[0].innerText==arr[4].innerText&&arr[4].innerText==arr[8].innerText&&arr[0].innerText!="")
{start.innerText=arr[0].innerText+" is winner";
start.style.paddingLeft="20px";
}
else if(arr[2].innerText==arr[4].innerText&&arr[4].innerText==arr[6].innerText&&arr[2].innerText!="")
{start.innerText=arr[2].innerText+" is winner";
start.style.paddingLeft="20px";

}

else if(arr[0].innerText==arr[3].innerText&&arr[3].innerText==arr[6].innerText&&arr[0].innerText!="")
{start.innerText=arr[0].innerText+" is winner";
start.style.paddingLeft="20px";

}
else if(arr[1].innerText==arr[4].innerText&&arr[4].innerText==arr[7].innerText&&arr[1].innerText!="")
{start.innerText=arr[1].innerText+" is winner";
start.style.paddingLeft="20px";

}
else if(arr[2].innerText==arr[5].innerText&&arr[5].innerText==arr[8].innerText&&arr[2].innerText!="")
{start.innerText=arr[2].innerText+" is winner";
start.style.paddingLeft="20px";

}
else if(arr[0].innerText!=""&&arr[1].innerText!=""&&arr[2].innerText!=""&&arr[3].innerText!=""&&arr[4].innerText!=""&&arr[5].innerText!=""&&arr[6].innerText!=""&&arr[7].innerText!=""&&arr[8].innerText!="")
{
start.innerText=" No winner";
start.style.paddingLeft="20px";


}

}



buttons.forEach(element => {

    element.addEventListener("click",(element)=>{
element.target.innerHTML=cont;
if(cont=="X"){
cont="O";
start.innerHTML=cont;
console.log(arr[0].innerh)
console.log(arr[2].innerText)
console.log(arr[1].innerText)


}
else{

cont="X";
start.innerHTML=cont;

}
winner();
startgame();

    });

});

//done...
