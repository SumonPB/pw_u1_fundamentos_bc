        function cambiarColor(id_elemento, color) {
            document.getElementById(id_elemento).style.color = color;
        }
        function agregarElemento(id_elementopadre,html) {
            document.getElementById(id_elementopadre).innerHTML = html;
        }
        function construirH1(etiqueta){
            return '<h1 id="id_calculadora">Calculadora</h1>';
        }
        function eliminarElemento(id_elemento){
            document.getElementById(id_elemento).remove();
        }
        function oclultarElemento(id_elemento){
            document.getElementById(id_elemento).style.display ='none'
        }
        function mostrarElemento(id_elemento){
            document.getElementById(id_elemento).style.display ='block'
        }

        function evaluarOperacion(tipo){
            let num1 = parseFloat(document.getElementById('id_n1').value);
            let num2 = parseFloat(document.getElementById('id_n2').value);
            let resultado = 0;
            if(tipo==='+'){
               resultado = suma(num1,num2);
            }
            if(tipo==='-'){
                resultado = restar(num1,num2);
            }
            if(tipo==='*'){
                resultado = multipicar(num1,num2);
            }
            if(tipo==='/'){
                resultado = dividir(num1,num2);
            }
            document.getElementById('id_resultado').innerText = num1+" "+tipo+" "+num2+" :"+resultado;
        }

        function suma(num1,num2){
            return num1+num2;
        }
        function restar(num1,num2){
            return num1-num2;
        }
        function multipicar(num1,num2){
            return num1*num2;
        }
        function dividir(num1,num2){
            if(num1!==0){
                return num1/num2;
            }
            return "no existe division para cero";
        }
        function fundamentosJS(){
            /*Tipos de variables dentro de js const-var-let */
            var nombre = "Byron"; // antigua y obsoleta variables cambiantes
            let apellido = "Condolo"; //misma funcion que var y destinado a variables cambiantes, let contiene tipado dinamico
            let apellido2 = 15;
            apellido2 = "Teram";
            let arreglo = [1,2,3,4,5,6];
            let diaSemana = ['Lunes','Martes','...'];
            const IVA = 12.8;
            console.log('Fundamentos de JS');
            console.log(nombre);
            console.log(IVA);
            console.log(arreglo);
            /* Manejo de arreglos */
            const arregloDiasSemana = ['Lunes','Martes','Miercoles'];
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
            const numerosPares = [2,4,6,8];
            const numerosImpares = [1,3,5,7,9];
            const numerosTotales = numerosImpares.concat(numerosPares);
            console.log(numerosTotales);

            /*Sentencias de control*/
            let edad = 19;
            if(edad >=18){
                console.log('Es mayor de Edad');
            }else{
                console.log('Es menor de Edad');
            }

            let dia= 'lunes';
            switch(dia){
                case 'lunes': 
                console.log('Es lunes');
                break;
                case 'martes': 
                console.log('Es martes');
                break;
                default: console.log('No es ninguno de esos dias');                
            }

            for(let i=0; i<=5; i++){
                console.log(i);
            }
            const frutas = ['Manzana','Sandia','Papaya','Naranja']
            for(let fruta of frutas){
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
            if(profesor.ciudad === 'Quito'){
                console.log('Es Quiteño');
            }
            if(profesor.edad !== 36){
                console.log('Es diferente de 36');
            }else{
                console.log('Es 36')
            }

            for(let clave in profesor){
                console.log(profesor[clave])
            }
        }
        
        