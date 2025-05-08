const Estadisticas = {};

Estadisticas.caclcularPromedio = function caclcularPromedio(lista) {
  function sumarElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarElementos);

  const promedio = sumaLista / lista.length;
  return promedio;
}

Estadisticas.esPar = function esPar(lista) {
  return !(lista.length % 2);
}

Estadisticas.calcularMediana = function calcularMediana(listaDesordenada) {
  function compare(a, b) {
    return a - b;
  }

  const list = listaDesordenada.sort(compare);

  const listaEsPar = Estadisticas.esPar(list);

  if (listaEsPar) {
    const mitad1ListaPar = list[list.length / 2 - 1];
    const mitad2ListaPar = list[list.length / 2];

    const listaMitades = [mitad1ListaPar, mitad2ListaPar];

    return Estadisticas.caclcularPromedio(listaMitades);
  } else {
    // es impar
    const indexListaImpar = Math.floor(list.length / 2);
    console.log(list[indexListaImpar]);
    return list[indexListaImpar];
  }
}

Estadisticas.calcularModa = function calcularModa(lista) {
  let object = {};

  for (let i = 0; i < lista.length; i++) {
    if (object[lista[i]]) {
      object[lista[i]] += 1;
    } else {
      object[lista[i]] = 1;
    }
  }  
  
  const orderObject = Object.entries(object).sort((a,b)=> a[1] - b[1])
  const maxObject = orderObject[orderObject.length - 1]

  const moda = maxObject[0];

  console.log('la moda es: ' + moda);
}

/* 
podria usar la media geometrica para hacer porcentaje de crecimiento del dolar 2014 a 2024 y tratar de calcular el valor del dolar para el 2025 o 2026
*/

// Este caso funciona si le paso los valor del dolar de manera ordenada
Estadisticas.mediaGeometrica = function mediaGeometrica(array, i) {

  const n = array.length - 1; // Para sacar la raiz a la N

  const posicion1 = array[0]; // Tengo el primer elemento
  const posicionN = array[n]; // Tengo el ultimo elemento

  const posiciones = posicionN / posicion1

  const mg = Math.pow(posiciones, 1 / n)

  const pronostico = posicionN * (mg ** i)
  
  return pronostico
}