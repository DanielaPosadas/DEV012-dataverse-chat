import dataset from "../data/dataset.js";
import { personajes_genero } from "../lib/dataFunctions.js";
import { computeStats } from "../lib/dataFunctions.js";

export const p_estadisticas_genero = () => {
  const data_personajes = dataset;

  const p_total_genero = document.createElement("p");
  p_total_genero.setAttribute("id", "conteo-personajes_genero");

  //CALCULO DEL TOTAL DE PERSONAJES POR GÉNERO
  p_total_genero.textContent =
    "Total de Mujeres: " +
    personajes_genero(data_personajes).total_mujeres +
    " Total de hombres: " +
    personajes_genero(data_personajes).total_hombres;

  return p_total_genero;
};

export const p_estadisticas = () => {
  const data_personajes = dataset;

  const p_total = document.createElement("p");
  p_total.setAttribute("id", "conteo-personajes");

  //CALCULO DEL TOTAL DE PERSONAJES
  p_total.textContent = "Total personajes: " + computeStats(data_personajes);

  return p_total;
};
