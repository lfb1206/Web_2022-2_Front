const texto = document.getElementById("Texto_fondo");

texto.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = "You must be the one <br> who conquers all";
});

// 👇️ Change text color back on mouseout
texto.addEventListener('mouseout', function handleMouseOut() {
    texto.innerHTML = "Who's gonna be the <br> King of durin's folk"
})