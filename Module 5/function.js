/*
Problem-01 : radian to degree
*/
function radianToDegree(radian) {
    if (typeof radian !== "number") {
    return "please enter a number";
    }
    const pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree.toFixed(2);
    }
    // const result = radianToDegree(10);
    // console.log(result);


var radian = 10;
var pi = Math.PI
var degree = radian * (180 / pi);
// console.log(degree.toFixed(2));

let extension = fileName.substr(fileName.lastIndexOf('.') + 1);
if (extension === "js") {
    console.log(true);
} else {
    console.log(false);
}

function isJavaScriptFile(fileName) {
    let extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    return extension === "js";
}

const result = isJavaScriptFile("fileNamep.js");
console.log(result);




