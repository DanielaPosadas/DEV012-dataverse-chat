import {dataset} from '../lib/dataAPI.js'
import {header} from '../components/header.js'
import {footer} from '../components/footer.js'

const inicio_home = () => {

 //HEADER Y FOOTER
 const home = document.querySelector('body');
 home.appendChild(header());

 const home2 = document.querySelector('body');
 home2.appendChild(footer());


};

export default inicio_home;

