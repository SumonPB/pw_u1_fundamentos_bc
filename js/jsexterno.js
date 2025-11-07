function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(id_elementopadre, html) {
    document.getElementById(id_elementopadre).innerHTML = html;
}
function construirH1(etiqueta) {
    return '<h1 id="id_calculadora">Calculadora</h1>';
}
function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}
function oclultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none'
}
function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block'
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo === '+') {
        resultado = suma(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multipicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = num1 + " " + tipo + " " + num2 + " :" + resultado;
}

function suma(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multipicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    if (num1 !== 0) {
        return num1 / num2;
    }
    return "no existe division para cero";
}
function fundamentosJS() {
    /*Tipos de variables dentro de js const-var-let */
    var nombre = "Byron"; // antigua y obsoleta variables cambiantes
    let apellido = "Condolo"; //misma funcion que var y destinado a variables cambiantes, let contiene tipado dinamico
    let apellido2 = 15;
    apellido2 = "Teram";
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diaSemana = ['Lunes', 'Martes', '...'];
    const IVA = 12.8;
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);
    /* Manejo de arreglos */
    const arregloDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    console.log(arregloDiasSemana);

    arregloDiasSemana.push('Jueves');
    console.log(arregloDiasSemana);
    arregloDiasSemana.unshift('Dias');
    console.log(arregloDiasSemana);
    console.log(arregloDiasSemana[0]);
    console.log('Manejo de nulos, undefined y vacio');
    arregloDiasSemana.push(null);
    arregloDiasSemana.push('')
    console.log(arregloDiasSemana[5]);
    console.log(arregloDiasSemana[6]);
    console.log(arregloDiasSemana[7]);
    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /*Sentencias de control*/
    let edad = 19;
    if (edad >= 18) {
        console.log('Es mayor de Edad');
    } else {
        console.log('Es menor de Edad');
    }

    let dia = 'lunes';
    switch (dia) {
        case 'lunes':
            console.log('Es lunes');
            break;
        case 'martes':
            console.log('Es martes');
            break;
        default: console.log('No es ninguno de esos dias');
    }

    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
    const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja']
    for (let fruta of frutas) {
        console.log(fruta)
    }
    /*Manejo de objetos */
    const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Teran';
    console.log(profesor);
    if (profesor.ciudad === 'Quito') {
        console.log('Es Quiteño');
    }
    if (profesor.edad !== 36) {
        console.log('Es diferente de 36');
    } else {
        console.log('Es 36')
    }

    for (let clave in profesor) {
        console.log(profesor[clave])
    }

    const e1 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    const e2 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    const arregloEstudiantes = [e1, e2,
        {
            nombre: 'Edison3',
            apellido: 'Cayambe',
            edad: 36,
            ecuatoriano: true,
            genero: 'M',
            ciudad: 'Quito'
        }
    ];
    console.log("--------------------------------");
    console.log(arregloEstudiantes[0]);
    console.log(arregloEstudiantes[2]);
    /* Desestruturacion */
    //Arreglos
    console.log("Desestructuracion Arreglos")
    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [p1, p2, p3, p4, p5] = ar1;
    console.log(p1);
    console.log(p4);

    const [primero, , , , , , ultimo] = ar1;
    console.log(primero);
    console.log(ultimo);
    const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(ar1)
    //Objetos
    console.log("Desestructuracion Objetos")
    const e3 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    const { nombre: name, ciudad } = e3;
    console.log(name);
    console.log(ciudad);

    const { nombre: n, ciudad: ciu } = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    console.log(n);
    console.log(ciu);
    const e4 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito',
        direccion: {
            calle: 'Av.America',
            barrio: 'La Gasca',
            numeracion: '2343'
        }
    }
    console.log(e4.direccion);
    console.log(e4.direccion.barrio);
    //Desestructurar objetos con atributos de tipo objeto
    const { edad: ed, direccion } = e4;
    console.log(ed);
    console.log(direccion);
    const { calle } = direccion;
    console.log(calle);

    const { direccion: { barrio, calle: c1, numeracion } } = e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);

}


function imprime([a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}
