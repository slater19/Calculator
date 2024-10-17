

input1 = document.getElementById('input1'),  
input2 = document.getElementById('input2'),    
 // number buttons
 // operator = document.querySelectorAll('.operators div'), // operator buttons
   button = document.getElementById('Submit');
 result = document.getElementById('result'), 
   // equal button
button.onclick = calculate;
function calculate() {
 var a = getNumberA();
 var b = getNumberB();
 
 var c = a + b;
 console.log(c)
 result=c
}

function getNumberA() {
 var a  = parseInt(input1.value);
 return a;
}

function getNumberB() {
 var b = parseInt(input2.value);
 return b;
}
 // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
