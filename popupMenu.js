//Hämta modellen
var modal = document.getElementById("myModal");

// hämtar bilden och lägger in den i modellen 
var img = document.getElementById("menuImage");
var modalImg = document.getElementById("myIMG")
var captionText = document.getElementById("caption")
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


//Hämtar span element som stänger modellen
var span = document.getElementsByClassName("close")[0];


//När användaren klickar på span (x) stäng modellen
span.onclick = function() {
    modal.style.display = "none";
}