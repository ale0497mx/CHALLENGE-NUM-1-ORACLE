
function encriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.createElement("h2");
    tituloM.classList.add("js-output");

    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    muñeco.classList.add("js-muñeco");
    const contenedor = document.getElementById("output");

    const h1 = document.createElement("h1");
    h1.classList.add("js-h1");

    const btn_copy = document.createElement("button");
    btn_copy.classList.add("js-btnCopy");

    let desencriptado = false;

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
        
        if (window.innerWidth <= 768){
            // contenedor.style.outline = '1px solid red';
            contenedor.style.background = 'none';
            contenedor.style.height = '60%';

            tituloM.style.fontSize = '14px';
            h1.style.fontSize = '22px';
            tituloM.style.background = "none";

            btn_copy.style.width = "80%"
            btn_copy.style.marginLeft = '10%'
            btn_copy.style.marginBottom = '40%';
        }
        else if(window.innerWidth <= 357){
            tituloM.style.fontSize = '14px';
            h1.style.fontSize = '22px';
            tituloM.style.background = "none";
            btn_copy.style.width = "80%"
            btn_copy.style.marginLeft = '10%'
        }else{
            tituloM.style.fontSize = '24px';
            h1.style.fontSize = '32px';
        }
        
        
        h1.style.marginTop = '100%';
        
        //Eliminar los hijos antiguos de salida
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
            
        }

        contenedor.style.width = '336px';
        contenedor.style.height = 'auto';
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
            if(window.innerWidth <= 768){
                muñeco.style.display = 'none';
            }
            else if(window.innerWidth <= 375){
                muñeco.style.display = 'none';
            }else{
                tituloM.style.fontSize = '24px';
                h1.style.fontSize = '32px';
            }
        }
        tituloM.textContent = "Ningún mensaje fue encontrado";
        contenedor.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar(){
    var texto = document.getElementById("msn").value;
    var tituloM = document.createElement("h2");
    tituloM.classList.add("js-output");

    var salida = document.getElementById("salida");
    var muñeco = document.getElementById("muñeco");
    muñeco.classList.add("js-muñeco");

    const contenedor = document.getElementById("output");

    const h1 = document.createElement("h1");
    h1.classList.add("js-h1");

    const btn_copy = document.createElement("button");
    btn_copy.classList.add("js-btnCopy");

    let desencriptado = false;

    
    tituloM.style.marginTop = '20px';
    

    let txtCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length != 0){
        const txt1 = document.createTextNode(txtCifrado);

        tituloM.textContent = "Texto encriptado con éxito";
        document.getElementById("msn").value = "";
        h1.appendChild(txt1);
        
        if (window.innerWidth <= 768){
            // contenedor.style.outline = '1px solid red';
            contenedor.style.background = 'none';
            contenedor.style.height = '60%';

            tituloM.style.fontSize = '14px';
            h1.style.fontSize = '22px';
            tituloM.style.background = "none";

            btn_copy.style.width = "80%"
            btn_copy.style.marginLeft = '10%'
            btn_copy.style.marginBottom = '40%';
        }
        else if(window.innerWidth <= 357){
            tituloM.style.fontSize = '14px';
            h1.style.fontSize = '22px';
            tituloM.style.background = "none";
            btn_copy.style.width = "80%"
            btn_copy.style.marginLeft = '10%'
        }else{
            tituloM.style.fontSize = '24px';
            h1.style.fontSize = '32px';
        }
        
        
        h1.style.marginTop = '100%';
        
        //Eliminar los hijos antiguos de salida
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
            
        }

        contenedor.style.width = '336px';
        contenedor.style.height = 'auto';
        
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
            if(window.innerWidth <= 768){
                muñeco.style.display = 'none';
            }
            else if(window.innerWidth <= 375){
                muñeco.style.display = 'none';
            }else{
                tituloM.style.fontSize = '24px';
                h1.style.fontSize = '32px';
            }
        }
        tituloM.textContent = "Ningún mensaje fue encontrado";
        contenedor.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }


}
