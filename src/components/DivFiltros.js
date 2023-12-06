
export const div_filtros = () => {

  const navMenu = document.createElement('nav');
  navMenu.setAttribute('id', "navMenu");
  const inputHamburguesa = document.createElement('input');
  inputHamburguesa.setAttribute('type', 'checkbox')
  inputHamburguesa.setAttribute('id', 'inputHamburguesa'); 
  const label = document.createElement('i');
  label.setAttribute('id', 'checkHamburger');
  label.setAttribute('class', 'fi fi-br-menu-burger');
  const div = document.createElement('div');
  div.setAttribute('id', "filtros");

  //CREACIÓN DE FILTROS
  div.innerHTML = `
<label for="filtrar-por-letality">Filtrar letalidad</label>
<select data-testid="select-filter" name="letality" id="filtrar-por-letality">
  <option value="nada"></option>
  <option value="Alto">Alto</option>
  <option value="Moderado">Moderado</option>
  <option value="Moderado-bajo">Moderado-bajo</option>
  <option value="Bajo">Bajo</option>
</select>
<label for="filtrar-por-kingdom">Filtrar reino</label>
  <select data-testid="select-filter" name="Kingdom" id="filtrar-por-kingdom">
  <option value="nada"></option>
  <option value="Cielo">Cielo</option>
  <option value="Earthrealm">Earthrealm</option>
  <option value="Outworld">Outworld</option>
  <option value="Netherrealm">Netherrealm</option>
</select>
<label for="ordenar-por">Ordenar por</label>
<select data-testid="select-sort" name="alfabet" id="ordenar-por">
  <option value="nada"></option>
  <option value="asc">A - Z</option>
  <option value="Mujer">Mujer-Hombre</option>
  <option value="Hombre">Hombre-Mujer</option>
</select>
<button data-testid="button-clear">Limpiar</button>`;


navMenu.appendChild(label);
navMenu.appendChild(inputHamburguesa);
navMenu.appendChild(div);

  return navMenu;
};