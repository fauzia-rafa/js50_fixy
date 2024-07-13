// example no.1
function textChange(){
    document.getElementById('t_c').innerHTML="Hello world";
}
// example no.2
function showDate(){
    document.getElementById('t_d').innerHTML= Date();
}
// example no.3
function clickLike(){
    document.getElementById('ex3_img').src="images/like.jpeg";
}
function clickLove(){
    document.getElementById('ex3_img').src="images/heart.png";
}
// example no.4
function colorChange(){
    document.getElementById('tc_change').style.color="blue";
}
// example no.5
function showText(){
    document.getElementById('showHide').style.display="block";
}
function hideText(){
    document.getElementById('showHide').style.display="none";
}
// example no.6
function dWrite(){
    document.write('avascript examples practice');
}
// example no.7
function wAlert(){
    window.alert('Javascript examples practice');
}
// example no.8
function cLog(){
    console.log('avascript examples practice');
}
// example no.9
var number1 = 5;
var number2 = 4;

var result = number1 + number2

function rAddition(){
    document.getElementById('r_a').innerHTML=result;
}
 // example no.9
//Show output of Addition
var number1= 4;
  var number2= 5;

  result = number1 + number2;
  function rAddition(){
    document.getElementById('r_a').innerHTML= result;
  }
   // example no.10
  //show output of Substraction
  let num1, num2, result2;
num1= 5;
  num2= 2;
  result2 = num1 - num2;
  function rSubstraction(){
    document.getElementById('r_s').innerHTML=result2;
  }
// // example no.11
var no1= 5;
var no2= 6;
result3 = no1 * no2;
function rMultiplication(){
    document.getElementById('r_m').innerHTML=result3;
}


// example no.12
function printPage(){
    window.print('');
}
// example no 13
function vMessage(){
    var data = "welcome";
    document.getElementById('v_m').innerHTML=data;
}
// example no 14
function tRepeat(){
    var data = "hello world";
    document.getElementById('t_p').innerHTML=data.repeat(3);
}
// example no.15
function cSelector(){
    document.getElementsByClassName('p')[1].innerHTML="hello world";
}
// example no.16
function countElement(){
    var count = document.getElementsByTagName('p');
    alert(count.length);
}
// example no.17
function doubleClick(){
    document.getElementById('ex17_img').src="images/heart.png";
}
// example no.18
function overMouse(){
    window.alert('Hi, This is Fauzia');
}
// example no.19
function leaveMouse(){
    document.getElementById('l_mouse').style.border="1px solid red";
    window.alert('You are leaving textarea');
}
// example no.20
let number11 = 10;
let number22 = 10;
let number33 = 20;
function booleansValue(){
    document.getElementById('b_v').innerHTML =
    (number11 == number22) + "<br>" + (number11 == number33);
       
}
// example no.21
let car = "Fiat";

function VariableCreat(){
    document.getElementById('v_creat').innerHTML = "Car: " +  car;

}
// example no.22
const car2 = {type:"Fiat", model:"500", color:"white"};

function showObject(){
    document.getElementById('s_object').innerHTML =
    "The car type is " + car2.type;
}
// example no.23
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

function objectLiteral(){
    document.getElementById('o_literal').innerHTML =
    person.firstName + " is " + person.age + " years old.";
}
// example no.24
const person2 = new Object();
person2.firstName = "fauzia";
person2.lastName = "rafa";
person2.age = 19;

function newKyword(){
    document.getElementById('n_kyword').innerHTML =
   " My name is " + person2.firstName + person2.lastName;
}
// example no.25
const person3 = {
    firstName: "fauzia",
    lastName: "rafa",
    age:19,
};
  const allData = person3;
    allData.age = 10;

function objectChanging(){
    document.getElementById('o_changing').innerHTML =
    person3.firstName + " is " + person3.age + " years old.";
}
// example no.26
const person4 = {
    firstName: "fauzia",
    lastName: "rafa",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
function definitionStore(){
    document.getElementById("d_sotre").innerHTML = person4.fullName();
  }
// example no.27
const person5 = {
    firstName: "fauzia",
    lastName: "rafa",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
function outputObject(){
    document.getElementById("output_ob").innerHTML = person5;
  }
//   example no.28
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
    text += fruit + ": " + amount + "<br>";
}

function objectsInLoops(){
    document.getElementById("ov_inL").innerHTML = text;
}
//   example no.29
 function showTHeTime(){
    document.getElementById('show_theTm').innerHTML = Date();
 }
//  example no.30
let carName1 = "Volvo XC60"; 
let carName2 = 'Volvo XC60';

function carName(){
    document.getElementById("car_name").innerHTML = carName1 + " and " + carName2; 
}
// example no.31
let answer1 = "It's alright";
let answer2 = "He is called 'fixy'";
let answer3 = 'He is called "catty"'; 

function qAns(){
    document.getElementById("q_ans").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}
// example no. 32
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function jsStrings(){
    document.getElementById("js_st").innerHTML = "The length of the string is = " + text1.length;
}
// example no. 33
let text11 = "We are the so-called \"Vikings\" from the north.";

function stringsVinking(){   
    document.getElementById("st_vin").innerHTML = text11;
}

// example no. 34
let text111 =
`The quick
brown fox
jumps over
the lazy dog`;

function internetExplorer(){   
    document.getElementById("in_explorer").innerHTML = text111;
}
// example no.35
let numberx = "fixy";
let numbery = new String('fixy');

function obString(){
    document.getElementById('ob_string').innerHTML = typeof numberx + "<br>" + typeof numbery;
}
// example no.36
var text2 = "Hellow World";

function charAtMethod(){
    document.getElementById('ch_me').innerHTML = text2.charAt(0);
}
// example no.37
let text22 = "I love cats. I am called cat lady. I have cats, and I am very found of cats."
const iterator = text22.matchAll("Cats");

function matchAll(){
    document.getElementById('m_all').innerHTML = Array.from(iterator);
}
// example no.38
let firstName = "fauzia";
let lastName = "rafa";

let text222 = `Hi, I am ${firstName}, ${lastName}.`;
function templatesAllow(){
    document.getElementById('tem_allow').innerHTML = text222;
}
// example no.39
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

function variablesStrings(){
    document.getElementById('va_stn').innerHTML = total;
}
// example no.40
let largeNumber = 123e5;
let smallNumber = 123e-5;
function extraSmLg(){
    document.getElementById('sm_lg').innerHTML = largeNumber + "<br>" + smallNumber;
}
// example no.41
let methodNumber = 123;
function toStringMethod(){
document.getElementById('st_mtd').innerHTML =
    methodNumber.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();
}
// example no.42
let maxNumber = Number.MAX_VALUE;
function maxValue(){
    document.getElementById('mx_vl').innerHTML = maxNumber;
}
// example no.43
const cars = ["Porsche", "Jaguar", "Rolce Royce"];
function jsArray(){
    document.getElementById('js_array').innerHTML = cars;
}
// example no.44
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

function toSortedMethod(){
    document.getElementById('toS_met').innerHTML = sorted;
}
// example no.45
const date1 = new Date("October 13, 2014 11:13:00");

function newDate(){
    document.getElementById('new_dt').innerHTML = date1;
}
// example no.46
const date2 = new Date("2015-03-25");

function isoDate(){
    document.getElementById('iso_date').innerHTML = date2;
}
// example no.47
const date3 = new Date("2021-03-25")
function setFullYear(){
    document.getElementById('setF_ye').innerHTML = date3.getFullYear();
}
// example no.48
function mathRandom(){
    document.getElementById('ma_ran').innerHTML = Math.random();
}
// example no.49
function jsBooleans(){
    document.getElementById('js_booleans').innerHTML =  Boolean(10 > 9);
}
// example no.50
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function jsSwitch(){
    document.getElementById('js_switch').innerHTML = "Today is " + day;
}



