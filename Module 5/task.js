let n = 11;
if(n%2==0) console.log("jor sonka");
// else console.log("Bejor sonka");

let numbers = [ 3,1,4,6,9,10,20,13,16,11,2,5,7,8,12,14,15,17,19];
let sorted = numbers.sort((a,b) => a-b);
// console.log(sorted);

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0) {
        // console.log(i);
    }
}

var friends = ["rahim","karim","abul","sadsd","Heroalom","chasialombhai"];
let maxLength = 0;
let np=0;
for(let i=0;i<friends.length;i++){
    if (friends[i].length > maxLength) {
        maxLength = friends[i].length;
        np = i;
      }    
}
// console.log("Maximum length of a friend's name:", friends[np]);

var numberss = [1,2,4,5,6,7,2,4,5,6];
// console.log(... new Set(numberss));
let max=0;
for(let i=0;i<friends.length;i++){
    if(numberss[i]>max){
        max=numberss[i];
    }
}
console.log(max);