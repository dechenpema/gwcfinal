var score=0;

function wrongAnswer1(){
  var x=document.getElementById("wrongAnswer1");
  if(x.style.display==="none"){
    x.style.display="block";
  }
}

function rightAnswer1(){
  var x=document.getElementById("rightAnswer1");
  if (x.style.display==="none"){
    x.style.display="block";
  }
  score++;
}

function wrongAnswer2(){
  var x=document.getElementById("wrongAnswer2");
  if(x.style.display==="none"){
    x.style.display="block";
  }
}

function rightAnswer2(){
  var x=document.getElementById("rightAnswer2");
  if (x.style.display==="none"){
    x.style.display="block";
  }
  score++
}

function showScore(){
  document.getElementById("finalscore").innerHTML="Your final score is: "+score+"/2. Disappointed in your results? Read the rest of our website to learn more.";
}
