import { filtro_letalidad, filtro_reino, filtros_acumulables } from "../src/lib/dataFunctions.js";
import { data as fakeData } from "./data.js";

const TEST_FILTRO_LEVEL = "Alto";
const TEST_FILTRO_REINO = "Earthrealm";
const TEST_FILTRO_AGE = "Age";
const TEST_FILTRO_OUTWORLD = "Outworld";
const TEST_FILTRO_BAJO = "Bajo";
const TEST_LEVEL_FALSE = "Moderado-alto";
const TEST_FILTRO_CIELO_FALSE = "Cielo";

describe("filtro_letalidad", () => {
  it("deberia devolver 2 personajes al filtro letalidad Alto", () => {
    const letalidad_alta = filtro_letalidad(fakeData, TEST_FILTRO_LEVEL);
    expect(letalidad_alta.length).toBe(2);
  });
});

describe("filtro_letalidad", () => {
  it("deberia devolver 1 personaje al filtro letalidad Bajo", () => {
    const letalidad_bajo = filtro_letalidad(fakeData, TEST_FILTRO_BAJO);
    expect(letalidad_bajo.length).toBe(1);
  });
});

describe("filtro_letalidad", () => {
  it("debería devolver 0 personaje al filtro Moderado-alto", () => {
    const not_MB = filtro_letalidad(fakeData, TEST_LEVEL_FALSE);
    expect(not_MB).not.toHaveProperty("Moderado-alto");
  });
});

describe("filtro_reino", () => {
  it("deberia devolver 4 personajes al filtro reino Earthrealm", () => {
    const reino_earthrealm = filtro_reino(fakeData, TEST_FILTRO_REINO);
    expect(reino_earthrealm.length).toBe(4);
  });
});

describe("filtro_reino", () => {
  it("deberia devolver 1 personaje al filtro reino Outworld", () => {
    const reino_outworld = filtro_reino(fakeData, TEST_FILTRO_OUTWORLD);
    expect(reino_outworld.length).toBe(1);
  });
});

describe("filtro_reino", () => {
  it("deberia devolver 0 personajes al filtro cielo falso", () => {
    const Cielo = filtro_reino(fakeData, TEST_FILTRO_CIELO_FALSE);
    expect(Cielo).not.toContain("Cielo");
  });
});

describe("filtroLet0", () => {
  it("debería devolver 0 personaje al filtro edad", () => {
    const not_age = filtros_acumulables(fakeData, TEST_FILTRO_AGE);
    expect(not_age).not.toHaveProperty("Age");
  });
});

describe("filtroLet0", () => {
  it("deberia devolver 5 personajes al filtro longitud total", () => {
    expect(fakeData).toHaveLength(5);
  });
});

describe("filtroLet0", () => {
  it("deberia devolver 2 personajes al filtro letalidad Alto", () => {
    const level_alto = filtros_acumulables(fakeData, TEST_FILTRO_LEVEL);
    expect(level_alto).toMatchObject(/alto/);
  });
});

describe("ordenaAZ", () => {
  it("Debe ordenar el nombre de los personajes de la A a la Z", () => {
    const desordenados = [
      "Scorpion",
      "Sub Zero",
      "Johnny Cage",
      "Kitana",
      "Jax Briggs",
    ];
    const ordenados = [
      "Jax Briggs",
      "Johnny Cage",
      "Kitana",
      "Scorpion",
      "Sub Zero",
    ];
    expect(desordenados.sort()).toEqual(ordenados);
  });
});

describe("ordenarGenero", () => {
  it("Debería ordenar los personajes de Mujer-Hombre", () => {
    const data_desor = [
      { name: "Scorpion", gender: "Hombre" },
      { name: "Kitana", gender: "Mujer" },
      { name: "Jax Briggs", gender: "Hombre" },
      { name: "Johnny Cage", gender: "Hombre" },
      { name: "Sub Zero", gender: "Hombre" },
    ];

    const ordenM_H = data_desor.sort((a, b) => {
      if (a.gender === "Mujer") {
        return -1;
      } else if (b.gender === "Hombre") {
        return 1;
      }
    });
    const esperado = [
      { name: "Kitana", gender: "Mujer" },
      { name: "Scorpion", gender: "Hombre" },
      { name: "Jax Briggs", gender: "Hombre" },
      { name: "Johnny Cage", gender: "Hombre" },
      { name: "Sub Zero", gender: "Hombre" },
    ];
    expect(ordenM_H).toEqual(esperado);
  });
});
