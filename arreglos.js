// comilla invertida `
let arregloIzquierda = [];
let arregloDerecha = [];

function agregarEdad(){
    let cmpEdad = document.getElementById("edad");
    let edadEntero = parseInt(cmpEdad.value);
    if(!isNaN(edadEntero)){
    arregloIzquierda.push(edadEntero);
    cmpEdad.value = "";
    pintarArregloIzquierda(arregloIzquierda);
    pintarArregloDerecha(arregloDerecha);
    } else {
        alert("Por favor, ingresa un número válido");
    }
}

function pintarArregloIzquierda(arreglo){
    let cmpTabla = document.getElementById("tablaIzquierda");    
    let contenidoTabla = "";
    for (let i = 0; i < arreglo.length; i++){
        contenidoTabla += `
                          <tr>
                            <td>${arreglo[i]}</td>
                            <td><button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button></td>
                            <td><button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button></td>
                          </tr>
                          `;
        }
    cmpTabla.innerHTML = contenidoTabla;    
}

function eliminarIzquierdo(indice){
    arregloIzquierda.splice(indice,1);
    pintarArregloIzquierda(arregloIzquierda);
}

function pintarArregloDerecha(arreglo){
    let cmpTabla = document.getElementById("tablaDerecha");    
    let contenidoTabla = "";
    for (let i = 0; i < arreglo.length; i++){
        contenidoTabla += `
                          <tr>
                            <td><button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button></td>
                            <td>${arreglo[i]}</td>
                            <td><button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button></td>                            
                          </tr>
                          `;
        }
    cmpTabla.innerHTML = contenidoTabla;    
}

function eliminarDerecho(indice){
    arregloDerecha.splice(indice,1);
    pintarArregloDerecha(arregloDerecha);
}

function moverHaciaDerecha(indice){
    let edadTomada = arregloIzquierda.slice(0,1);
    arregloIzquierda.splice(0,1);
    arregloDerecha.push(edadTomada);
    pintarArregloIzquierda(arregloIzquierda);
    pintarArregloDerecha(arregloDerecha);
}

function moverHaciaIzquierda(indice){
    let edadTomada = arregloDerecha.slice(0,1);
    arregloDerecha.splice(0,1);
    arregloIzquierda.push(edadTomada);
    pintarArregloIzquierda(arregloIzquierda);
    pintarArregloDerecha(arregloDerecha);
}