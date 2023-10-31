
let hdata = document.querySelector('h5')
let btn = document.querySelector("#add")

let check = 0

btn.addEventListener("click",function() {
    if (!check ) {
    hdata.innerHTML = "follow sexfully"
     hdata.style.color = "green" 
     btn.innerHTML = "Remove"
      check = 1
    //  console.log("new")
} else{
    hdata.innerHTML = "follow "
     hdata.style.color = "red" 
     btn.innerHTML = "Follow"
      check = 0
}
 })
// let remove = document.querySelector("#remove")

// change.addEventListener("click",function() {
//     hdata.innerHTML = "follow sexfully"
//     hdata.style.color = "green"
//     // console.log("STOPPED")
// })
// remove.addEventListener("click",function() {
//     hdata.innerHTML = "follow"
//     hdata.style.color = "red"
// })


