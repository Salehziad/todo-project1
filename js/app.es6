
var answers = [];
// link to html
let task1 =document.getElementById("task1").innerHTML;
let task2 =document.getElementById("task2").innerHTML;
let task3 =document.getElementById("task3").innerHTML;
let task4 =document.getElementById("task4").innerHTML;
let task5 =document.getElementById("task5").innerHTML;
//make variables
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
// get functions 
answers1();
answers2();
answers3();
answers4();
answers5();
console.log(answers);
// making functions
function answers1(){
for(var i = 0; i < 1; i++){
    answer1=prompt(task1).toLowerCase();
   if(answer1=="yes"){
       answers.push("yes");
   }else if(answer1=="no"){
       answers.push("no")
   }else{
       answers.push("invalid")
   }
}
}

function answers2(){
    for(var i = 0; i < 1; i++){
        answer2=prompt(task2).toLowerCase();
       if(answer2=="yes"){
           answers.push("yes");
       }else if(answer2=="no"){
           answers.push("no")
       }else{
           answers.push("invalid")
       }
    }
}

function answers3(){
    for(var i = 0; i < 1; i++){
        answer3=prompt(task3).toLowerCase();
       if(answer3=="yes"){
           answers.push("yes");
       }else if(answer3=="no"){
           answers.push("no")
       }else{
           answers.push("invalid")
       }
    }
}


function answers4(){
    for(var i = 0; i < 1; i++){
        answer4=prompt(task4).toLowerCase();
       if(answer4=="yes"){
           answers.push("yes");
       }else if(answer4=="no"){
           answers.push("no")
       }else{
           answers.push("invalid")
       }
    }
}

function answers5(){
    for(var i = 0; i < 1; i++){
        answer5=prompt(task5).toLowerCase();
       if(answer5=="yes"){
           answers.push("yes");
       }else if(answer5=="no"){
           answers.push("no")
       }else{
           answers.push("invalid")
       }
    }
}