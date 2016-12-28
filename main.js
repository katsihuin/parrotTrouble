function consultar() {
    var amanecer = document.getElementById("antesSieteAM");
    var anochecer  = document.getElementById("despuesOchoPM");
    var salida = document.getElementById("salida");
    
    if (siHablando.checked && (amanecer.checked || anochecer.checked))
    {
        //Si esta en problemas
        salida.innerHTML = "True";
    } else {
        //No hay problema
        salida.innerHTML = "False";
    }
}
  