e --> enter
o --> ober 
i --> imes 
a --> ai 
u --> ufat 

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    //la i es para que solo afecte a mayusculas y minusculas -- e y E {
    //la g es para toda la linea u oracion
    //la m es para que afecte multiples lineas o parrafos }

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = none;
    document.getElementById("texto").style.display = none;
    document.getElementById("texto2").innerHTML = txtCifrado; 
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}