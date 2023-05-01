
function encriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.createElement("h2");
    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    const contenedor = document.getElementById("output");
    const h1 = document.createElement("h1");
    const btn_copy = document.createElement("button");
    let desencriptado = false;

    tituloM.style.fontSize = '24px';
    tituloM.style.marginTop = '20px';
    tituloM.style.background = "#fff";

    var txtCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length != 0){
        const txt1 = document.createTextNode(txtCifrado);

        tituloM.textContent = "Texto encriptado con éxito";
        document.getElementById("msn").value = "";
        h1.appendChild(txt1);
        h1.style.fontSize = '32px';
        h1.style.marginTop = '100%';
        
        //Eliminar los hijos antiguos de salida
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
            
        }
        // contenedor.style.outline = "1px solid red";
        contenedor.style.width = '336px';
        contenedor.style.height = 'auto';
        //Agregar ek boton copiar
        
        btn_copy.textContent = "Copiar";
        btn_copy.style.borderRadius = '24px';
        btn_copy.style.border = '1px solid #0A3871'
        btn_copy.style.fontWeight = '400';
        btn_copy.style.width = '336px';
        btn_copy.style.height = '67px';
        btn_copy.style.fontSize = '19px';
        btn_copy.style.marginTop = '50%';
        
        
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
        tituloM.textContent = "Ningún mensaje fue encontrado";
        contenedor.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.createElement("h2");
    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    const contenedor = document.getElementById("output");
    const h1 = document.createElement("h1");
    const btn_copy = document.createElement("button");
    let desencriptado = false;

    tituloM.style.fontSize = '24px';
    tituloM.style.marginTop = '20px';
    tituloM.style.background = "#fff";

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !=0){
        const txt1 = document.createTextNode(textoCifrado);

        tituloM.textContent = "Texto encriptado con exito";
        document.getElementById("msn").value = "";
        h1.appendChild(txt1);
        h1.style.fontSize = '32px';
        h1.style.marginTop = '100%';

        // Eliminar los hijos antiguos de salida, si los hay
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        // estilo de contenedor
        contenedor.style.width = '336px';
        contenedor.style.height = 'auto';

        //Agregar ek boton copiar
        btn_copy.textContent = "Copiar";
        btn_copy.style.borderRadius = '24px';
        btn_copy.style.border = '1px solid #0A3871'
        btn_copy.style.fontWeight = '400';
        btn_copy.style.width = '336px';
        btn_copy.style.height = '67px';
        btn_copy.style.fontSize = '19px';
        btn_copy.style.marginTop = '50%';

        btn_copy.addEventListener("click",function(){
            let range = document.createRange();
            range.selectNodeContents(h1);
            let seleccion = window.getSelection();
            seleccion.removeAllRanges();
            seleccion.addRange(range);
            document.execCommand("copy");
            swal("Copiado!", "El texto se ha copiado correctamente", "success");
        });

        //agregar los ellementos a los contenedores
        contenedor.appendChild(h1);
        contenedor.appendChild(tituloM);
        contenedor.appendChild(btn_copy);

        muñeco.style.display = 'none';
        desencriptado = true;
    } else {
        if (!desencriptado) {
            muñeco.style.display = 'block';
        }

        tituloM.textContent = "Ningún mensaje fue encontrado";
        contenedor.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }


}
