// Importamos clase de la que esta hereda
import BaseController from './BaseController.js'
import dataService from '../services/DataService.js'
import {adView} from '../views.js'

export default class AdsListController extends BaseController { // Este metodo crea un nodo en el DOM y le adjunta la vista correspondiente
    render(ads) { // Guarda en columns un array con los cuatro <div class="column">
        const columns = document.getElementsByClassName('column')
        // Este bucle recorre las cuatro columnas y va añadiendo anuncios de izquierda a derecha y de arriba a abajo
        for (let i = 0; i < ads.length; i++) {
            const article = document.createElement('article')
            article.innerHTML = adView(ads[i])
            if (i == 0 || i % 4 == 0) {
                columns[0].appendChild(article)
            } else if (i == 1 || i % 4 == 1) {
                columns[1].appendChild(article)
            } else if (i == 2 || i % 4 == 2) {
                columns[2].appendChild(article)
            } else if (i == 3 || i % 4 == 3) {
                columns[3].appendChild(article)
            }
        }
        console.log(columns.length)


        // this.element.appendChild(article)
    }

    async loadAds() {
        this.publish(this.events.START_LOADING, {});
        // Guarda los anuncios en la variable ads
        try {
            const ads = await dataService.getAds()
            // Pasa los anuncios como parametro al método render()
            this.render(ads)
        } catch (error) {
            console.error(error)
            this.publish(this.events.ERROR, error)
        } finally{
            //Esto se ejecuta siempre, vaya bien (try) o mal (catch)
            //this.loader.hideLoading()
            this.publish(this.events.FINISH_LOADING, {})
        }

    }


}
