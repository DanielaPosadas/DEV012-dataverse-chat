import dataset from '../data/dataset.js'
import { header } from '../components/header.js'
import { footer } from '../components/footer.js'
import { div_filtros } from '../components/DivFiltros.js'
import { filtros_acumulables } from '../lib/dataFunctions.js'
import { p_estadisticas, p_estadisticas_genero } from '../components/estadisticas.js'
import { navigateTo } from '../router.js'

 const inicio_home = () => {

    const data_personajes = dataset;

    //METER HEADER, FILTROS Y ESTADÍSTICAS A UN DIV
    const div_home = document.createElement('div');
    div_home.setAttribute('id', 'viewHome');

    div_home.appendChild(header());
    div_home.appendChild(div_filtros());
    div_home.appendChild(p_estadisticas());
    div_home.appendChild(p_estadisticas_genero());


    const contenedorTarjetasdiv = document.createElement('div');
    div_home.appendChild(contenedorTarjetasdiv);
   // div_home.setAttribute('id', 'viewHome');
    
    //RENDERIZAR LAS TARJETAS
    const renderItems = (data_personajes) => {

        const ulista = document.createElement('ul');
        ulista.setAttribute("class", "lista-de-personajes");

        data_personajes.forEach(item => {
            const ilista = document.createElement('li');
            ilista.setAttribute("class", "lista");
            ilista.setAttribute("itemscope", "");
            ilista.setAttribute("itemtype", "Personajes-MK");
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
            dDescriptiva1.setAttribute("itemprop", "name");
            dDescriptiva1.textContent = item.name;
            //DT2 - DD2 lethalityLevel
            const dtalle2 = document.createElement('dt');
            dtalle2.textContent = "Letalidad:";
            dlDescriptiva.appendChild(dtalle2);
            const dDescriptiva2 = document.createElement('dd');
            dlDescriptiva.appendChild(dDescriptiva2);
            dDescriptiva2.setAttribute("itemprop", "lethalityLevel");
            dDescriptiva2.textContent = item.facts.lethalityLevel;
            //DT4 - DD4 kingdom
            const dtalle4 = document.createElement('dt');
            dtalle4.textContent = "Reino:";
            dlDescriptiva.appendChild(dtalle4);
            const dDescriptiva4 = document.createElement('dd');
            dlDescriptiva.appendChild(dDescriptiva4);
            dDescriptiva4.setAttribute("itemprop", "kingdom");
            dDescriptiva4.textContent = item.facts.kingdom;
           
            /*const personajeId= item.id; 
            const urlParams = new URLSearchParams({
                id: personajeId,
              });*/
            ilista.addEventListener("click", function(){
                navigateTo("/description", item);
                //console.log(item.name);
            })
        });
        return ulista;
    }
    contenedorTarjetasdiv.appendChild(renderItems(data_personajes));

    //SELECCIONAR <SELECT>
    const filtrarLetalidad = div_home.querySelector('[id="filtrar-por-letality"]');
    const filtrarReino = div_home.querySelector('[id="filtrar-por-kingdom"]');
    const ordenarPersonajes = div_home.querySelector('[id="ordenar-por"]');

    filtrarLetalidad.addEventListener("change", filtros);
    filtrarReino.addEventListener("change", filtros);
    ordenarPersonajes.addEventListener("change", filtros);

    function filtros() {
        const option_FiltrarLetalidad = filtrarLetalidad.value
        const option_FiltrarReino = filtrarReino.value
        const option_OrdenarPor = ordenarPersonajes.value
    
        contenedorTarjetasdiv.innerHTML="";

        //ASIGNAR LOS <OPTION> A LOS filterBy/orderBy
        const dataFiltrada = filtros_acumulables(data_personajes, option_FiltrarLetalidad, option_FiltrarReino, option_OrdenarPor);
        contenedorTarjetasdiv.appendChild(renderItems(dataFiltrada)); 
    }

    //DAR FUNCION DE LIMPIAR SELECCIONES CON BOTON
    const boton = div_home.querySelector('[data-testid="button-clear"]');
    boton.addEventListener("click", limpiar);

    function limpiar() {
        filtrarLetalidad.value = "nada";
        filtrarReino.value = "nada";
        ordenarPersonajes.value = "nada";
        contenedorTarjetasdiv.innerHTML = "";
        contenedorTarjetasdiv.appendChild(renderItems(data_personajes));
    }

    //BOTÓN DE CHAT GRUPAL
    const btnChatGrupal = document.createElement('button');
    btnChatGrupal.setAttribute('id', 'btnChatGrupal');
    btnChatGrupal.textContent = "Chatea con todos"
    div_home.appendChild(btnChatGrupal);

    btnChatGrupal.addEventListener("click", chatGrupal);

    function chatGrupal(){
       navigateTo("/panel"); 
    }

    
    //METER FOOTER AL ROOT
    div_home.appendChild(footer());

return div_home;
};

export default inicio_home;
