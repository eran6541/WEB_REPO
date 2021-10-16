//console.log(document.getElementsByClassName('options') );
//console.log(document.getElementsByClassName('options')[0].innerHTML);

const images = ["pizza.jpg","sushi.jpg","dumplings.jpg"];
const title = ["pizza","sushi","dumplings"];

for(i=0;i<document.getElementsByClassName("options").length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">';

  document.getElementsByClassName("options"[i].setAttribute("id",title[i]);

  document.getElementsByClassName("options")[i].addEventListener("click",function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID;)
  document.getElementsById(sectionID).classList.toggle("blue");
}
