import { navigateTo } from "../router.js";

export const btnHome = () => {

const divBtnHome = document.createElement('div');
divBtnHome.setAttribute('id', 'divBtnHome');
const btn = document.createElement('button');
btn.setAttribute('id', 'btnHome');
const imageHome = document.createElement('img');
imageHome.setAttribute('id', 'imageHome');
imageHome.src = 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png';
divBtnHome.appendChild(btn);
divBtnHome.appendChild(imageHome);

divBtnHome.addEventListener('click', VolverInicio);

function VolverInicio () {
        navigateTo("/");
};

return divBtnHome;
}