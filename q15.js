// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

function slope(x1, y1, x2, y2){
    return (y2 - y1)/(x2 - x1);
}
// when x-intercept value of y1 = 0, then x1  
let y1 = 0;
let x1 = (y1 + 2)/2;

// when y-intercept value of x2 = 0, then y2 
let x2 = 0;
let y2 = 2*x2 - 2;

console.log(`The slope is: ${slope(x1, y1, x2, y2)}`);