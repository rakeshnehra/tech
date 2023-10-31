let man = document.querySelector('#man')
let cus = document.querySelector('.custom')

man.addEventListener('mousemove',function(e) {
    cus.style.top = e.y+"px"
    cus.style.left = e.x+"px"
    // console.log(e.y);
    
})


