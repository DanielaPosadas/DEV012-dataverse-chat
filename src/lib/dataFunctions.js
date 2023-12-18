// ASIGNAR <OPTION>`S A LA DATA
export const filtros_acumulables = (
  data_personajes,
  option_FiltrarLetalidad,
  option_FiltrarReino,
  option_OrdenarPor,
) => {
  let data_filtrada = data_personajes;

  //FILTRAR LETALIDAD Y REINO
  if (option_FiltrarLetalidad !== "nada") {
    data_filtrada = filtro_letalidad(data_filtrada, option_FiltrarLetalidad);
  }
  if (option_FiltrarReino !== "nada") {
    data_filtrada = filtro_reino(data_filtrada, option_FiltrarReino);
  }

  //ORDENAR ASC, GENERO H-M / M-H
  if (option_OrdenarPor === "asc") {
    data_filtrada = ordenaAZ(data_filtrada);
  } else if (option_OrdenarPor === "Mujer") {
    data_filtrada = ordenaGen(data_filtrada);
  } else if (option_OrdenarPor === "Hombre") {
    data_filtrada = ordenaGen2(data_filtrada);
  }
  return data_filtrada;
};

//FILTRAR DATA PARA OBTENER SOLO FACTS.LETHALITYLEVEL
export const filtro_letalidad = (data_personajes, filterByletalidad) => {
  const filtro1 = data_personajes.filter(
    (items) => items.facts.lethalityLevel === filterByletalidad,
  );
  return filtro1;
};

//FILTRAR DATA PARA OBTENER SOLO FACTS.KINGDOM
export const filtro_reino = (data_personajes, filterByreino) => {
  const filtro1 = data_personajes.filter(
    (items) => items.facts.kingdom === filterByreino,
  );
  return filtro1;
};

// FUNCIONES ORDENAMIENTO GÉNERO
export const ordenaGen = (data_personajes) => {
  const sinFiltrar = data_personajes.filter(
    (items) => items.gender === "Mujer" || "Hombre",
  );
  const ordenGenM = sinFiltrar.sort((a, b) => {
    if (a.gender === "Mujer") {
      return -1;
    } else if (b.gender === "Hombre") {
      return 1;
    }
  });
  return ordenGenM;
};

export const ordenaGen2 = (data_personajes) => {
  const sinFiltrar = data_personajes.filter(
    (items) => items.gender === "Hombre" || "Mujer",
  );
  const ordenGenH = sinFiltrar.sort((a, b) => {
    if (a.gender === "Hombre") {
      return -1;
    } else if (b.gender === "Mujer") {
      return 1;
    }
  });
  return ordenGenH;
};

//FUNCION ORDENAMIENTO DE A - Z
export const ordenaAZ = (data_personajes) => {
  const sinFiltrar = data_personajes.filter((items) => items.name);
  const ordenNameAz = sinFiltrar.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
  });
  return ordenNameAz;
};

//COMPUTE-STATS PARA CALCULO DEL TOTAL DE PERSONAJES
export const computeStats = (data_personajes) => {
  const conteoPersonajes = data_personajes.reduce((total) => {
    return total + 1;
  }, 0);
  return Number(conteoPersonajes);
};

export const personajes_genero = (data_personajes) => {
  const newPersonajes = data_personajes.map((personajes) => personajes.gender);
  let total_mujeres = 0;
  let total_hombres = 0;
  for (let i = 0; i < newPersonajes.length; i++) {
    const valoractual = newPersonajes[i];
    if (valoractual === "Mujer") {
      total_mujeres++;
    } else if (valoractual === "Hombre") {
      total_hombres++;
    }
  }
  return { total_mujeres, total_hombres };
};
