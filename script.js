function envoyer(){

let point = 0;    
let q1 = document.quiz.question1.value;
let q2 = document.quiz.question2.value;
let q3 = document.quiz.question3.value;
let q4 = document.quiz.question4.value;
let q5 = document.quiz.question5.value;
let quiz = document.getElementById("quiz");
let resultat = document.getElementById("resultat");
let song = new Audio('../son/song.wav') 
let song1 = new Audio('../son/song1.mp3')


if (q1 == "2017") { point++ }
if (q2 == "AliouneDIOP") { point++ }
if (q3 == "SargalAwards") { point++ }
if (q4 == "22") { point++ }
if (q5 == "Bureau") { point++ }

quiz.style.display = "none"


if (point < 3){
    resultat.textContent = `Ton résultat est de ${point} point: goorgoorloul waaay!!! xana nekko membre!`;
    song1.play();
}

else {
    resultat.textContent = `Ton résultat est de ${point} point: Excellent vous êtes un bon membre!`;
    song.play();
}

}



