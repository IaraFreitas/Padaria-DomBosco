const video = document.getElementById("myVideo"); 
const btn = document.getElementById("myBtn");



function myFunction() { //Aqui criamos uma Função 
  
  
if (video.paused) { //se o vídeo estiver pausado execute: Play.
    video.play();
    btn.innerHTML = "Pause"; // O innerHTML funciona como uma alteração textual dentro do HTML, usamos ele no Javascript para executar essa chamada.
  } else { //caso contrário, se o 
    video.pause();
    btn.innerHTML = "Play";
  }
}