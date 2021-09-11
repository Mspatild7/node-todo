var list = document.getElementById("todolist");
var ad = document.getElementById("add");

ad.addEventListener("click",addit);

function addit(e){
    e.preventDefault();
    if(list.value != ""){
    let el = document.createElement("li");
    el.innerHTML =list.value ;
    let removebtn = document.createElement("SPAN");
    removebtn.innerHTML = "&#x2715;";
    el.appendChild(removebtn);
    document.getElementById("l").appendChild(el);
    list.value="";
    
    removebtn.addEventListener("click" , (e) =>{
        e.target.parentElement.style.display = "none"; 
    });
}
else{
    window.alert("Oops! We Can't See Anything to Add.\nPlease Write Something To Add");
}
}
