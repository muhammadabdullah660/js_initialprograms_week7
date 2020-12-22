var subject1 = parseFloat ( prompt("Enter subject 1 marks out 0f 100"));
var subject2 = parseFloat ( prompt("Enter subject 2 marks out of 100"));
var subject3 = parseFloat ( prompt("Enter subject 3 marks out of 100"));

console.log ("Subject 1 marks are:", (subject1));
console.log ("Subject 2 marks are:", (subject2));
console.log ("Subject 3 marks are:", (subject3));

var average  = Math.round(subject1 + subject2 + subject3) / 3 ;
console.log ("Average marks are:",(average));

if (average >= 80){
    console.log ("You are above standard, Admission Granted!");
}
