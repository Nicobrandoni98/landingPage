// Analisis personal
function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const medianaSalarios = Estadisticas.calcularMediana(salarios);

}

function proyectarSalario(nombrePersona, pronostico) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const proyeccionSalario = Estadisticas.mediaGeometrica(
    salarios,
    pronostico
  ).toFixed(2);

  return proyeccionSalario;
}


// Analisis empresarial

const empresas = {};

for (const persona of salarios) {
  for (const trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

function proyeccionEmpresa(nombreEmpresa, proyeccion) {
  const empresa = empresas[nombreEmpresa]

  const years = Object.keys(empresa).sort();
  const medianas = [];

  for (const year of years) {
    const sueldos = empresa[year]
    if (sueldos && sueldos.length > 0) {
      const mediana = Estadisticas.calcularMediana(sueldos);
      medianas.push(mediana)
    }
  }
    

  const resultado = Estadisticas.mediaGeometrica(medianas, proyeccion)
  console.log(`Proyeccion a ${proyeccion} años para ${nombreEmpresa}: $${resultado}`);

}

function medianaEmpresa(nombreEmpresa, anio) {
  if (!empresas[nombreEmpresa]) {
    console.log("La empresa no existe");
    return null;
  }

  const datosEmpresa = empresas[nombreEmpresa];
  const anioEmpresa = anio;

  if (!datosEmpresa[anio]) {
    console.log("El anio de la empresa no esta disponible");
    return null;
  }

  const sueldos = datosEmpresa[anioEmpresa];

  const medianaEmpresa = Estadisticas.calcularMediana(sueldos);
  console.log(
    `La mediana de la empresa ${nombreEmpresa} en el año ${anio} es de: ${medianaEmpresa}`
  );
}


// Analisis General

function medianaGeneral() {
  const names = salarios.map((persona) => persona.name);
  const medianaPorNombre = names.map((nombre) => Estadisticas.medianaPersona(nombre))

  console.log({names, medianaPorNombre});
  
}