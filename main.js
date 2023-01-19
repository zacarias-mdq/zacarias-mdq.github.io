
let imagen = document.getElementById("fotoperfil");

imagen.onclick = function () {
    console.log(imagen)    ;
    if (imagen.src==("img/perfil.png")){
        imagen.src = "img/perfil2.png";}
        else{
            imagen.src = "img/perfil.png";
        }
}
