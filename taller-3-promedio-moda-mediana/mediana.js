function calcularPromedio (lista){ 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function calcularMediana (lista) {
    let listaOrdenada = lista.sort(function (x, y){return x - y;});
    console.log(listaOrdenada);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    function esPar (numero){
        if (numero % 2===0){
            return true;
        } else {
            return false
        }
    }
    
    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        
        const promedio = calcularPromedio([elemento1, elemento2]);
    
        mediana = promedio;
    
    
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}



//Convertir todo en función
//Ordenar nuestra lista antes de realizar las operaciones utilizando el método sort()