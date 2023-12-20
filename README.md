# Dataverse Chat - Mortal Kombat

## Índice

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipado](#4-prototipado)
* [5. Funcionalidades](#5-funcionalidades)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Pruebas unitarias y asíncronas](#7-pruebas-unitarias-y-asíncronas)
* [8. Desarrolladoras web](#8-desarrolladoras-web)

***

## 1. Introducción

El siguiente proyecto tiene como objetivo presentar ante los usuarios un set de datos transformados en una interfaz intuitiva. Se podrá navegar en la página web a través de diferentes vistas que permitirán una interacción con la información proporcionada de la temática elegida.

"Entiéndase como set de datos como un cúmulo de información que se va filtrando hasta obtener un mínimo de datos que sea del interés del usuario."

¿Qué tal si pudiéramos conversar con los personajes de nuestro videojuego favorito?

## 2. Resumen del proyecto

Se construyó una single page aplication (SPA) para visualizar un conjunto (set) de datos que se ha generado con prompting a través de la inteligencia artificial. Las funcionalidades de esta página web se han estructurado con base en historias de usuario para obtener un sitio amigable y visualmente agradable, dando como resultado las siguientes vistas:

* Home
* Descripción
* Chat grupal
* Configuración
* Not found

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una Single Page Application (SPA)
* Aplicar conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
  vistas de la aplicación
* Integrar una API externa
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 3. Historias de usuario

![Historias de usuario-Iniciales](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.34.56%20p.m..png)

Para la creación de historias de usuario se han planteado una serie de preguntas que toman en cuenta la posible interacción del usuario final para crear un proceso lógico e intuitivo a través de la aplicación web. Con base en las respuestas implementamos un plan de trabajo que permitió fijar objetivos y diseñar una serie de prototipos que solucionaran las necesidades que planteaban dichas historias de usuario.

![Historias de usuario-Finales](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.37.04%20p.m..png)

## 4. Prototipado

Esta aplicación web ha sido diseñada a partir de prototipos de baja y alta fidelidad que toman en cuenta los objetivos generales, los cuales se han implementado de manera eficiente para dar como resultado una plataforma fácil de utilizar por cualquier usuario.

![Prototipado-Desktop](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.35.21%20p.m..png)

El prototipo de alta fidelidad fue diseñado en la apliación Figma para su uso en ordenadores y télefonos celulares, estableciendo paleta de color, estilo visual, fuentes tipográficas y funcionamiento inicial.

![Prototipado-Mobile](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.36.25%20p.m..png)

## 5. Funcionalidades

### `Home`

La interfaz de la primer vista (home) está constituida por diversos filtros que reducen, agrupan y ordenan el set de datos devolviendo un grupo de tarjetas con información específica sobre la temática. Además de contar con un botón que permite "limpiar" cada uno de los campos y volver a la muestra de datos por defecto.

![Vista home](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.33.57%20p.m..png)

### `Descripción`

La vista detalle presenta información detallada acerca del personaje seleccionado mostrando de manera gráfica y escrita datos que puediese ser de interés, además de incluir un chat que integra una IA (inteligencia artificial) que permite mantener una conversación en tiempo real con el personaje del videojuego.

![Vista descripción](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.42.58%20p.m..png)

### `Configuración`

En la vista de configuración se visualiza un campo al que deberán ingresar una clave (apikey) proporcionada por el sitio de OpenAI, lo que permitirá habilitar las funcionalidades de cada uno de los chats. A través de dos botones (enviar/limpiar) se proporcionará al sitio dicha clave o en su defecto, se eliminará inhabilitando los chats.

![Vista configuración](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.43.13%20p.m..png)

### `Chat grupal`

Por medio de un botón ubicado en la vista de home, se redirige a la vista de chat grupal la cual accede al número de usuarios conectados haciendo scroll y permite al usuario interactuar de manera simultánea con todos los personajes dentro del set de datos a través de un chat.

![Vista char grupal](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.42.25%20p.m..png)

### `Not found`

Finalmente, al intentar acceder a un URL inválido se despliega una vista de Not Found mostrando el error, una breve descripción y un botón que redirige nuevamente a home.

![Vista NotFound](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/Captura%20de%20pantalla%202023-12-20%20a%20la(s)%205.43.32%20p.m..png)

Esta aplicación implementa media queries en cada una de sus vistas por medio de CSS para su visualización a través de distintos dispositivos móviles y ordenadores.

## 6. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript (ES6), HTML y CSS.

```
* Componentes
- btnHome.js
- Chatcomponente.js
- DivFiltros.js
- estadisticas.js
- footer.js
- header.js
* Data
- dataset.js
* Lib
- dataFunctions.js
- peticion.js
* Views
- apikey.js
- Chat.js
- Description.js
- InicioHome.js
- NotFound.js
* index.html
* router.js
* Style
- style.css
- style2.css
- style3.css
- style4.css
- style5.css
```

## 7. Pruebas unitarias y asíncronas

A lo largo del proyecto implementamos 11 pruebas unitarias a los filtros de letalidad, reino y a los ordenamientos A-Z y género, además de 2 pruebas que permiten testear código asíncrono. Dentro de estas pruebas unitarias hicimos uso de diversos jest test typecSript:

```
.ToBe
.toHaveProperty
.not.toContain
.not.toHaveProperty
.toHaveLength
.toMatchObject
.toEqual
```
Las pruebas dan al proyecto una cobertura del 70% de statements.

## 7. Desarrolladoras Web

| [<img src="https://avatars.githubusercontent.com/u/144648301?v=4" width=115><br><sub>Daniela Posadas</sub>](https://github.com/DanielaPosadas) |  [<img src="https://avatars.githubusercontent.com/u/144945339?v=4" width=115><br><sub>Martha Melitón</sub>](https://github.com/MarthaMIMS) |
| :---: | :---: |
