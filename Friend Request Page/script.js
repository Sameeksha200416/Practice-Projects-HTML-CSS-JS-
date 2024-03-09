var show = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        show.innerHTML= "Friends"
        show.style.color="green"
        btn.innerHTML = "Remove Friend"
        console.log("hii")
        check = 1
    }
    else{
        show.innerHTML= "American Singer"
        show.style.color="rgb(255, 7, 98)"
        btn.innerHTML = "Add Friend"
        console.log("hii")
        check = 0
    }
   
})

