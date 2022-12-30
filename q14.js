// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function slope(x1, y1, x2, y2){
    return (y2 - y1)/(x2 - x1);
}

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

console.log(`The slope is: ${slope(x1, y1, x2, y2)}`);