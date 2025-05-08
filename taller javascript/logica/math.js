console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4 + "cm2";

const areaCuadrado = ladoCuadrado * ladoCuadrado + "cm2";

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});
console.groupEnd("Cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const permietroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lados, base) {
  if(lados === base) {
    console.warn('Este no es un triangulo isosceles');
  } else {
    // PARA SACAR LA ALTURA  h = raizcuadrada(lado1**2 - (b**2)/4)
    return Math.sqrt( (lados ** 2) - ((base ** 2)) / 4 );
  }
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
  const Semiperimetro = (a + b + c ) /2 ;

  if (a == b && a == c ) {
      console.warn('Este no es un triangulo escaleno.')
  }
  else {
      H = ((2/a) * (Math.sqrt(Semiperimetro * (Semiperimetro - a) *(Semiperimetro - b) * (Semiperimetro - c))));
      console.log('La altura "H" = ' + H) ;
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  permietroTriangulo,
  areaTriangulo,
});

console.groupEnd("Triangulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI; // para hacer a la potencia usamos **

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2
  const radioAlcuadrado = Math.pow(radio, 2);

  return {
    circunferencia: diametro * Math.PI.toFixed(2),
    area: radioAlcuadrado * Math.PI.toFixed(3),
  };
}

console.groupEnd("Circulo");