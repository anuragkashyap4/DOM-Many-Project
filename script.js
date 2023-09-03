var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var value = 0
btn.addEventListener("click",function(){
    if(value == 0){
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        value = 1
        btn.innerHTML = "Remove Friend"
        
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "Red"
        value = 0 
        btn.innerHTML = "Add Friend"
    }

})
