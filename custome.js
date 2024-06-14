let openPopup = document.getElementById('openPopup');
let closePopup = document.getElementById('closePopup');
let popup = document.getElementById('popup');

openPopup.onclick = function(){
   popup.classList.add("open-popup");
}
closePopup.onclick = function(){
    popup.classList.remove("open-popup");
 }