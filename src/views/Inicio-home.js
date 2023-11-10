import {dataset} from '../lib/dataAPI.js'
import {header} from '../components/header.js'
import {footer} from '../components/footer.js'
import {div_filtros} from '../components/home.js'

 const inicio_home = () => {

 //HEADER Y FOOTER
 const home = document.querySelector('body');
 home.appendChild(header());
 home.appendChild(div_filtros());
 

 //Creacion de filtros
 const div= document.getElementById('filtros')
 div.innerHTML=`
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
    <button data-testid="button-clear">Limpiar</button>
    `;
    const div_root=document.getElementById('root');
    const ulista = document.createElement('ul');
    ulista.setAttribute("class","lista-de-personajes");
    div_root.appendChild(ulista);
    dataset().forEach(item => {
        const ilista = document.createElement('li');
        ilista.setAttribute("class","lista");
        ilista.setAttribute("itemscope","");
        ilista.setAttribute("itemtype","Personajes-MK");
        //Meter todos los li dentro del ul
        ulista.appendChild(ilista);
        //Meter los <dl> dentro de los <li>
        const dlDescriptiva = document.createElement('dl');
        ilista.appendChild(dlDescriptiva);
        //Agregar atributo itemscope e itemtype a los <dl>
        dlDescriptiva.setAttribute("itemscope", "");
        dlDescriptiva.setAttribute("itemtype", "Personajes-MK");
        //Meter <img> dentro de los <dl>
        const imagen = document.createElement('img');
        dlDescriptiva.appendChild(imagen);
        imagen.src = item.imageUrl;
        //DT1 - DD1   nombre
        const dtalle1 = document.createElement('dt');
        dlDescriptiva.appendChild(dtalle1);
        const dDescriptiva1 = document.createElement('dd');
        dlDescriptiva.appendChild(dDescriptiva1);
        dDescriptiva1.setAttribute("itemprop","name");
        dDescriptiva1.textContent = item.name;
        //DT2 - DD2 lethalityLevel
        const dtalle2 = document.createElement('dt');
        dtalle2.textContent = "Letalidad:";
        dlDescriptiva.appendChild(dtalle2);
        const dDescriptiva2 = document.createElement('dd');
        dlDescriptiva.appendChild(dDescriptiva2);
        dDescriptiva2.setAttribute("itemprop","lethalityLevel");
        dDescriptiva2.textContent = item.facts.lethalityLevel;
        //DT4 - DD4 kingdom
        const dtalle4 = document.createElement('dt');
        dtalle4.textContent = "Reino:";
        dlDescriptiva.appendChild(dtalle4);
        const dDescriptiva4 = document.createElement('dd');
        dlDescriptiva.appendChild(dDescriptiva4);
        dDescriptiva4.setAttribute("itemprop","kingdom");
        dDescriptiva4.textContent = item.facts.kingdom;
      });
      home.appendChild(footer());
};

export default inicio_home;
