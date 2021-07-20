function perimetroCuadrado(lado){
    return lado * 4;

}

function areaCuadrado (lado){
    return lado * lado;
}


function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;

}

function alturaTriangulo (lado, base){
        const altura = Math.sqrt(lado**2 - (base**2 / 4));
        return (altura);
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

function diametroCirculo (radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

//Interaccion HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value)
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputBase");
    const lado1 = parseFloat(inputLado1.value);
    const lado2 = parseFloat(inputLado2.value);
    const base = parseFloat(inputBase.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputBase");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    if (lado1 === lado2){
        const altura = alturaTriangulo(lado1, base);
        const area = areaTriangulo(base, altura);
        alert(area);
    } else {
        alert("Las medidas de los lados no son iguales, así que no corresponde a un Triángulo Isósceles.");
    }

}