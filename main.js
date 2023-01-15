
let imagen = document.getElementById("fotoperfil");

imagen.onclick = function () {
    console.log(imagen)    ;
    if (imagen.src==("http://127.0.0.1:5500/img/perfil.png")){
        imagen.src = "img/perfil2.png";}
        else{
            imagen.src = "img/perfil.png";
        }
}