import * as phantom from 'phantom';
var phantoms = require('x-ray-phantom');
var Xray = require('x-ray');
let metadata1:string = "https://w102a21be.api.esales.apptus.cloud/api/v1/panels/product-search?sessionKey=e30a1775-0391-4fad-356d-2b75f30f5b48&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.window_first=1&arg.window_last=500&arg.search_phrase=canape&arg.sort_by=relevance%20desc&arg.catalog_root=category_catalog_frfr%3A%27root%27&arg.catalog_filter=type%3A%27functional%27%20OR%20type%3A%27products%27&arg.nr_catalog_categories=3&arg.locale=fr_FR&arg.filter=market%3A%27FRFR%27";
var x = Xray().driver(phantoms({
    dnodeOpts: {
        weak: false
    }
}));
//import Produit from "../Models/Produit";
//var cher = require('../Models/cher');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
export async function getPageContent(url: string) /*:Promise<any> */{
    /*x('https://blog.ycombinator.com/', '.post', [{
        title: 'h1 a',
        link: '.article-title@href'
    }])(function(err:Error, result:any){
        console.log(result)
    })
        .paginate('.nav-previous a@href')
        .limit(3)
        .write('results.txt')*/
    x(url, '.product-compact__spacer', [{
        name: '.product-compact__name',
        link: 'a@href',
        statut: '.product-compact-new-label .product-compact-new-label__text',
        description: 'product-compact__type',
        price:'.product-compact__price .product-compact__price__value',
        profil:'.product-compact__image-container img@src'
    }]).paginate('.show-more__button.button--primary')
        .limit(3)
        .write('results.txt')
    //return new Promise<any>(async (next)=>{
        /*const instance: phantom.PhantomJS = await phantom.create();
        const page: phantom.WebPage = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });


        const status: string = await page.open(url);

        const content:string = await page.property('content');
        const { document } = (new JSDOM(content)).window;
        var produits = document.getElementsByClassName("product-compact__spacer");
        var count: number = 0;
        //console.log(status + ' load I' + im + ' temp ' + temp);
        for(let i in produits){
            if(produits[i].children[0]) {
                var link: string = produits[i].children[0].getAttribute("href");
                var profil: string = produits[i].children[0].children[0].children[0].children[0].children[0].getAttribute("src");
                var statut: string = produits[i].children[0].children[1].children[0].innerHTML;
                var name: string = produits[i].children[0].children[2].innerHTML;
                var describe: string = produits[i].children[0].children[3].innerHTML;
                var price: string = produits[i].children[0].children[4].children[0].innerHTML;
                console.log(link + ' ' + profil + ' ' + statut + ' ' + name.trim() + ' ' + describe.trim() + ' ' + price + ' \n produit lui même ' + JSON.stringify(produits[i]));
                count++;
                console.log(count)
            }
            continue;
        }*/


}
