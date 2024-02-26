
function getDrop() {
    document.getElementById("dropbtn").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dbtn')) {
      var drops = document.getElementsByClassName("dropitems");
      var i;
      for (i = 0; i < drops.length; i++) {
        var openDrop = drops[i];
        if (openDrop.classList.contains('show')) {
          openDrop.classList.remove('show');
        }
      }
    }
  }
  
  function random(number){
    return Math.floor(Math.random() * (number + 1));
}

  box.addEventListener("mouseover", () =>{ 
    
    const rndCl = `rgb(${random(255)} ${random(255)} ${random(255)}`;
    document.body.style.backgroundColor = rndCl; 
    console.log("clicked");

});

