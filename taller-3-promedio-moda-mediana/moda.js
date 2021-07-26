

  function moda (lista){

    const listaCount = {};
    //Convierto la lista en un objeto
    lista.map(
        function (elemento){
          if (listaCount[elemento]){
              listaCount[elemento] += 1;
          }else{
              listaCount[elemento] = 1;
          } 
        }
    );

    //El objeto lo vuelvo a convertir en un array y lo ordeno por el segundo elemento del array
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
  
        }
    );

    // Una vez ordenado el array selecciono el ultimo elemento del array que gracias al metodo sort() esta ordenado de menor a mayor.
    const moda = listaArray[listaArray.length - 1];

    return moda;

  }
