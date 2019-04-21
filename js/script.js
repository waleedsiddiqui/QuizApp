function myFunction (){

    var correctAnswer = 0;
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3b").checked;
    var q4 = document.getElementById("q4b").checked;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6c").checked;
    var q7 = document.getElementById("q7c").checked;
    var q8 = document.getElementById("q8b").checked;
    var q9 = document.getElementById("q9a").checked;
    var q10 =document.getElementById("q10c").checked;
    var q11 = document.getElementById("q11a").checked;
    var q12 = document.getElementById("q12a").checked;


if (q1.toUpperCase() === "Hyper Text Markup Language" || q1.toUpperCase()==="c"){
    correctAnswer++
}
if(q2){
correctAnswer++
}
if(q3){
    correctAnswer++
}
if(q4){
    correctAnswer++
}
if(q5.toUpperCase()==="Cascading Style Sheet" || q5.toUpperCase()==="a"){
    correctAnswer++
}
if(q6){
    correctAnswer++
}
if(q7){
    correctAnswer++
}
if(q8){
    correctAnswer++
}
if(q9){
    correctAnswer++
}
if(q10){
    correctAnswer++
}
if(q10){
    correctAnswer++
}
if(q11){
    correctAnswer++
}
if(q12){
    correctAnswer++;
}

if(correctAnswer===12){
    document.getElementById("result").innerHTML = "Congratulations! You got all the answers correct: "+correctAnswer;}

else if (correctAnswer>= 7){
    document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";
}
else if(correctAnswer>=5){
    document.getElementById("result").innerHTML= "You got " + correctAnswers + " answers correct";
}
else if( correctAnswer >= 2){
    document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";   
}
else if (correctAnswer===1){
    document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}

    else if (correctAnswer === 0){
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";
    
    }
    document.getElementById("quiz-form").reset();
}