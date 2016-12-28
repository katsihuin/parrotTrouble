function consultar() {
    var amanecer = document.getElementById("antesSieteAM");
    var anochecer  = document.getElementById("despuesOchoPM");
    var salida = document.getElementById("salida");
    
    if (siHablando.checked && (amanecer.checked || anochecer.checked))
    {
        //En problemas
        salida.innerHTML = "Si estas en problemas";
    } else {
        //No hay problema
        salida.innerHTML = "No estas en problemas";
    }
}
  