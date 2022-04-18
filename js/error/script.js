const box__ghost_eyes = document.querySelector(".box__ghost-eyes");
let pageX = screen.width;
let pageY = screen.height;
let mouseX = 0;
let mouseY = 0;

document.onmousemove = (e) => {
    // verticalAxis
    mouseY = e.pageY;
    let yAxis = ((pageY / 2 - mouseY) / pageY) * 100;
    // horizontalAxis
    mouseX = e.pageX / -pageX;
    let xAxis = -mouseX * 50 - 50;
    box__ghost_eyes.style.transform = `translate(${xAxis}%, ${-yAxis}%)`;
    // console.log(`(X: ${xAxis}, Y: ${yAxis})`);
};

// let pageX = $(document).width();
// let pageY = $(document).height();
// let mouseY = 0;
// let mouseX = 0;

// $(document).mousemove(function (event) {

//     mouseY = event.pageY;
//     yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
//     horizontalAxis
//     mouseX = event.pageX / -pageX;
//     xAxis = -mouseX * 100 - 100;

//     $(".box__ghost-eyes").css({
//         transform: "translate(" + xAxis + "%,-" + yAxis + "%)",
//     });

//     console.log('X: ' + xAxis);
// });
