var score=0;
var answer1;
var answer2;

function wrongAnswer1(){
  var x=document.getElementById("wrongAnswer1");
  if((x.style.display==="none") && !(answer1===1)){
    x.style.display="block";
    answer1=0;
  }
}

function rightAnswer1(){
  var x=document.getElementById("rightAnswer1");
  if ((x.style.display==="none") && !(answer1===0)){
    x.style.display="block";
    answer1=1;
  }
}

function wrongAnswer2(){
  var x=document.getElementById("wrongAnswer2");
  if((x.style.display==="none") && !(answer2===1)){
    x.style.display="block";
    answer2=0;
  }
}

function rightAnswer2(){
  var x=document.getElementById("rightAnswer2");
  if ((x.style.display==="none") && !(answer2===0)){
    x.style.display="block";
    answer2=1;
  }
}

function showScore(){
  score=answer1+answer2;
  document.getElementById("finalscore").innerHTML="Your final score is: "+score+"/2. Disappointed in your results? Read the rest of our website to learn more.";
  score=0;
}
