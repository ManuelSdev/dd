import LoaderController from './controllers/LoaderController.js'
import AdsListController from './controllers/AdsListController.js'
import dataService from './services/DataService.js'



window.addEventListener('DOMContentLoaded', async (event) => {
    console.log('DOM fully loaded and parsed');

    const loader = document.querySelector('.loader-wrapper ')
    const loaderController= new LoaderController(loader)

    const element = document.querySelector('.products-list')
    const adsListController = new AdsListController(element)
    adsListController.loadAds()
   // dataService.getAds()

});