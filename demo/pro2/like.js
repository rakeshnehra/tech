let icone = document.querySelector("#contenear")
let love = document.querySelector('i')

    icone.addEventListener("dblclick",function() {
     love.style.transform = " translate(-50%,-50%) scale(1)"
     setTimeout(function()  {
        love.style.transform = " translate(-50%,-50%) scale(0)"
     },2000);
    // console.log("hi");
})
