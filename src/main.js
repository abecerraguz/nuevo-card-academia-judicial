import './style.scss';
import { loadPush, unLoadPush } from './components/loadPush.js';
import * as UI from './components/interfaz.js'

const windowObject = window.document;




if( typeof window === 'object' ){

    window.addEventListener('DOMContentLoaded', function(){

        const buttonCardAcademiaAll = document.querySelectorAll('.cardAcademia__buttonResumen');
        const closeButtonAll = document.querySelectorAll('.cardAcademia__close');

        buttonCardAcademiaAll.forEach((element)=>{
            element.addEventListener('click',(e)=>{
                e.preventDefault();
                let id = e.target.id.split("-")[1];
                document.querySelector(`#cardAcademia__content-${id}`).classList.add('d-none')
                document.querySelector(`#cardAcademia__resumen-${id}`).classList.remove('d-none')
                document.querySelector(`#cardAcademia__close-${id}`).classList.remove('d-none')
            })
        })


        closeButtonAll.forEach( element =>{
            element.addEventListener('click', (e)=>{
                e.preventDefault();

                let id = e.target.id.split("-")[1];
    
                document.querySelector(`#cardAcademia__resumen-${id}`).classList.add('d-none')
                document.querySelector(`#cardAcademia__content-${id}`).classList.remove('d-none')
                document.querySelector(`#cardAcademia__content-${id}`).classList.add('d-block')
    
                document.querySelector(`#cardAcademia__close-${id}`).classList.remove('d-block')
                document.querySelector(`#cardAcademia__close-${id}`).classList.add('d-none')

            })
        })

    })

}