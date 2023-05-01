
// function copiar() {
//     const h1 = document.querySelector("#salida h1");
//     if (!h1) {
//       return;
//     }
//     const range = document.createRange();
//     range.selectNode(h1);
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(range);
//     document.execCommand("copy");
//     swal("Texto copiado!", "", "success");
//   }
function encriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.getElementById("titulo");
    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    const contenedor = document.getElementById("output");
    const h1 = document.createElement("h1");
    const btn_copy = document.createElement("button");
    let desencriptado = false;

    var txtCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length != 0){
        const txt1 = document.createTextNode(txtCifrado);

        tituloM.textContent = "Texto encriptado con exito";
        document.getElementById("msn").value = "";
        h1.appendChild(txt1);
        h1.style.fontSize = '32px';

        //Eliminar los hijos antiguos de salida
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
            
        }
        
        //Agregar ek boton copiar
        btn_copy.textContent = "Copiar";
        btn_copy.addEventListener("click",function(){
            let range = document.createRange();
            range.selectNodeContents(h1);
            let seleccion = window.getSelection();
            seleccion.removeAllRanges();
            seleccion.addRange(range);
            document.execCommand("copy");
            swal("Copiado!", "El texto se ha copiado correctamente", "success");
        });

        // Agregar elementos al contenedor
        
        contenedor.appendChild(h1);
        contenedor.appendChild(tituloM);
        contenedor.appendChild(btn_copy);

        // agregar contenido al elemento
        
        muñeco.style.display = 'none';
        desencriptado = true;
    }else{
        if(!desencriptado){
            muñeco.style.display = 'block';
        }
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