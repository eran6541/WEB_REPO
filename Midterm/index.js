const care = ["Journal for thirty minutes","Paint your nails a fun color","Plan out your week"];
document.getElementById("day1").addEventListener("click",buttonClicked);

let quotecounter = 0;
console.log("clicked" + quotecounter);
function buttonClicked(){
  document.getElementById("sundaycare").innerHTML = care[quotecounter];
  if (quotecounter>=2){
    quotecounter = 0;
  }else{
    quotecounter++;
  }
}

const care2 = ["Go to the gym","Cook dinner","Take a 30 minute nap"];
let quotecounter2 = 0;
document.getElementById("day2").addEventListener("click", buttonClicked2);
console.log("clicked" + quotecounter2);
function buttonClicked2(){
  document.getElementById("mondaycare").innerHTML = care2[quotecounter2];
  if (quotecounter2>=2){
    quotecounter2=0;
  }else{
    quotecounter2++;
  }
}
const care3 = ["Go grocery shopping","Do a face mask","Watch a movie"];
let quotecounter3 = 0;
document.getElementById("day3").addEventListener("click", buttonClicked3);
console.log("clicked" + quotecounter3);
function buttonClicked3(){
  document.getElementById("tuesdaycare").innerHTML = care3[quotecounter3];
  if (quotecounter3>=2){
    quotecounter3=0;
  }else{
    quotecounter3++;
  }
}

const care4 = ["Do a hair mask","Read thirty minutes","Make your favorite beverage"];
let quotecounter4 = 0;
document.getElementById("day4").addEventListener("click",buttonClicked4);
console.log("clicked" + quotecounter4);
function buttonClicked4(){
  document.getElementById("wednesdaycare").innerHTML = care4[quotecounter4];
  if (quotecounter4>=2){
    quotecounter4=0;
  }else{
    quotecounter4++;
  }
}
const care5 = ["Go for a walk","Facetime a friend","Do a 15 minute yoga session"];
let quotecounter5 = 0;
document.getElementById("day5").addEventListener("click",buttonClicked5);
console.log("clicked" + quotecounter5);
function buttonClicked5(){
  document.getElementById("thursdaycare").innerHTML = care5[quotecounter5];
  if (quotecounter5>=2){
    quotecounter5=0;
  }else{
    quotecounter5++;
  }
}

const care6 = ["Go out for dinner","Go shopping","Hang out with a friend"];
let quotecounter6 = 0;
document.getElementById("day6").addEventListener("click",buttonClicked6);
console.log("clicked" + quotecounter5);
function buttonClicked6(){
  document.getElementById("fridaycare").innerHTML = care6[quotecounter6];
  if (quotecounter6>=2){
    quotecounter6=0;
  }else{
    quotecounter6++;
  }
}

const care7 = ["Go on a hike","Go on a drive","Organize closet"];
let quotecounter7 = 0;
document.getElementById("day7").addEventListener("click",buttonClicked7);
console.log("clicked" + quotecounter7);
function buttonClicked7(){
  document.getElementById("saturdaycare").innerHTML = care7[quotecounter7];
  if (quotecounter7>=2){
    quotecounter7=0;
  }else{
    quotecounter7++;
  }
}
