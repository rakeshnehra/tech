
let livetime = document.getElementById('timeer');
//  const livetime = document.querySelector("#timeer")

setInterval(function () {
    let currentDate = new Date();
    // console.log(currentDate.toLocaleTimeString());
    timeer.innerHTML = currentDate.toLocaleTimeString();
});


// const clocks = document.getElementById('timeer');
// const clock = document.querySelector('#timeer')

// setInterval(function () {
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());
//   timeer.innerHTML = date.toLocaleTimeString();
// }, 1000);

