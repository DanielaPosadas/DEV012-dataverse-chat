// ASIGNAR <OPTION>`S A LA DATA
export const filtroLet0 = (data, letalidad, reino, orden) => {
    let data_filtrada = data;
  
    //FILTRAR LETALIDAD Y REINO
    if (letalidad !== "nada") {
      data_filtrada = filtro_letalidad(data_filtrada, letalidad);
    }
    if (reino !== "nada") {
      data_filtrada = filtro_reino(data_filtrada, reino);
    }
    
  //ORDENAR ASC, GENERO H-M O M-H
    if (orden === "asc") {
      data_filtrada = ordenaAZ(data_filtrada);
    } else if (orden === "Mujer") {
      data_filtrada = ordenaGen(data_filtrada);
    } else if (orden === "Hombre") {
      data_filtrada = ordenaGen2(data_filtrada);
    }
    return data_filtrada;
  };
  
  //FILTRAR DATA PARA OBTENER SOLO FACTS.LETHALITYLEVEL
  export const filtro_letalidad = (data, letalidad) => {
    const filtro1 = data.filter(
      (items) => items.facts.lethalityLevel === letalidad
    );
    return filtro1;
  };
  
  //FILTRAR DATA PARA OBTENER SOLO FACTS.KINGDOM
  export const filtro_reino = (data, reino) => {
    const filtro1 = data.filter((items) => items.facts.kingdom === reino);
    return filtro1;
  };
  
  // FUNCIONES ORDENAMIENTO GÉNERO
  export const ordenaGen = (data) => {
    const sinFiltrar = data.filter(
      (items) => items.gender === "Mujer" || "Hombre"
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
  
  export const ordenaGen2 = (data) => {
    const sinFiltrar = data.filter(
      (items) => items.gender === "Hombre" || "Mujer"
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
  export const ordenaAZ = (data) => {
    const sinFiltrar = data.filter((items) => items.name);
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
  export const computeStats = (data) => {
    const newPersonajes = data.map((personajes) => personajes.gender);
    const conteoPersonajes = newPersonajes.reduce((total) => {
      return total + 1;
    }, 0);
    return Number(conteoPersonajes);
  };