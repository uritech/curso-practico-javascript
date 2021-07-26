//Funciones Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularPromedio (lista){ 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calcular Mediana
function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const elementoA = lista[mitad -1];
        const elementoB = lista[mitad];
        const mediana = calcularPromedio([elementoA, elementoB]);
        return mediana;

    } else {
        const mediana = lista[mitad];
        return mediana;
    }
}

//Recorro todo el array de colombia con el método map() y solo guardo el salary del objeto
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
});

const salariosColOrdenado = salariosCol.sort(
    function (x, y) {
        return x - y;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColOrdenado);


//Mediana del Top 10%
const spliceStart = (salariosColOrdenado.length * 90) / 100;
const spliceCount = salariosColOrdenado.length - spliceStart;;
const salariosColTop10 = salariosColOrdenado.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol, medianaTop10Col});