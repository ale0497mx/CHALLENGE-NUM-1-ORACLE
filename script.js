

function encriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.getElementById("titulo");
    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    const h1 = document.createElement("h1");
    

    var txtCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length != 0){
        const txt1 = document.createTextNode(txtCifrado);
        // document.getElementById("msn").value = txtCifrado;
        tituloM.textContent = "Texto encriptado con exito";
        document.getElementById("msn").value = "";
        
        // muñeco.style.display = "none";
        h1.appendChild(txt1);
        h1.style.fontSize = '32px';
        muñeco.parentNode.replaceChild(h1, muñeco);
    }else{
        muñeco.src = "./img/Muñeco.png";
        tituloM.textContent ="Ningun mensaje fue encontrado";
        salida.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "Cuidado");
    }
}

function desencriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.getElementById("titulo");
    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    const h1 = document.createElement("h1");
    let desencriptado = false;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !=0){
        const txt1 = document.createTextNode(textoCifrado);
        tituloM.textContent = "Texto desencriptado con éxito";
        document.getElementById("msn").value = "";
        h1.appendChild(txt1);
        h1.style.fontSize = '32px';

        // Eliminar los hijos antiguos de salida, si los hay
        while (salida.firstChild) {
            salida.removeChild(salida.firstChild);
        }

        salida.appendChild(h1);
        muñeco.style.display = 'none';
        desencriptado = true;
    } else {
        if (!desencriptado) {
            muñeco.style.display = 'block';
        }

        tituloM.textContent = "Ningún mensaje fue encontrado";
        salida.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }


}
    // if(texto.length !=0){
    //     const txt1 = document.createTextNode(textoCifrado);
    //     tituloM.textContent = "Texto desencriptado con éxito";
    //     document.getElementById("msn").value = "";
    //     h1.appendChild(txt1);
    //     h1.style.fontSize = '32px';
    //     muñeco.parentNode.replaceChild(h1, muñeco);
    // }else{
    //     muñeco.src = "./img/Muñeco.png";
    //     tituloM.textContent = "Ningún mensaje fue encontrado";
    //     salida.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    //     swal("Ooops!", "Debes ingresar un texto", "warning");
    // }
// var textarea = document.getElementById("msn");

    
    // var input = document.getElementById("msn");
    // var btn = document.getElementById("btn");
    // var cam = document.getElementById("cam");
    // input.focus();
    // btn.addEventListener("click", () => {
    //     cam.textContent = input.value;
    // });

    // function encriptarTxt(){
    //     var txt = input.value;
    //     var txtEncriptado = encriptar(txt);
    //     cam.innerText = txtEncriptado;
    // }

    // btn.addEventListener("click", encriptarTxt);

    // btn.addEventListener("click", cambiar);
// let btn = document.getElementById("btn");
// btn.addEventListener("click", enviar);