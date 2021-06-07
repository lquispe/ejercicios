document.getElementById("msjBienvenida").innerHTML = "Bienvenidos a DOM";
document.getElementById("msjBienvenida").style.backgroundColor = "blue";

var listaClases = document.getElementsByClassName("textoGrande");
console.log(listaClases);

document.getElementById("btnCrearNota").dblclick = "borrarNota()";


function crearNota() {
    // cambiamos el texto html
    document.getElementById("nota").innerHTML = "Nota creada dinámicamente";

    // cambiamos el texto del botón
    document.getElementById("btnCrearNota").value = "Eliminar Nota";

    
}

function borrarNota() {
    document.getElementById("nota").innerHTML = "";
}

