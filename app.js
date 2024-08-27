const texArea = document.querySelector(".ingresar__texto");
const mensaje = document.querySelector(".mensaje__en__pantalla");


function botonEncriptar(){
   const textoEncriptado = encriptar(texArea.value)
   mensaje.value = textoEncriptado
   texArea.value = "";
   mensaje.style.backgroundImage = "none"
}

function botonDescencriptar(){
    const textoDesencriptado = desencriptar(texArea.value)
    mensaje.value = textoDesencriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function copiado() {
    navigator.clipboard.writeText(mensaje.value)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }

  function copiar() {
    copiado()
  }



const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',
};


function encriptar(texto) {

    
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        if (reglas[texto[i]]) {
            textoEncriptado += reglas[texto[i]];
        } else {
            textoEncriptado += texto[i];
        }
    }
        return textoEncriptado;
}


function desencriptar(textoEncriptado) {

    const reglasDesencripRegex = {
    letraE:new RegExp (reglas.e, 'g'),
    letraI:new RegExp (reglas.i, 'g'),
    letraA:new RegExp (reglas.a, 'g'),
    letraO:new RegExp (reglas.o, 'g'),
    letraU:new RegExp (reglas.u, 'g'),
}

    let textoDensencriptado =  textoEncriptado.replace(reglasDesencripRegex.letraE, 'e')
    textoDensencriptado =  textoDensencriptado.replace(reglasDesencripRegex.letraI, 'i')
    textoDensencriptado = textoDensencriptado.replace(reglasDesencripRegex.letraA, 'a')
    textoDensencriptado = textoDensencriptado.replace(reglasDesencripRegex.letraO, 'o')
    textoDensencriptado = textoDensencriptado.replace(reglasDesencripRegex.letraU, 'u')
    return textoDensencriptado;

};


let textoEncriptado = encriptar(texto.toLowerCase());
console.log("Texto encriptado:", textoEncriptado);

let textoDesencriptado = desencriptar(textoEncriptado);
console.log("Texto desencriptado:", textoDesencriptado);






