"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
const scrapeIt = require('scrape-it');
const CircularJSON = require('circular-json');
const SousCateGorie_1 = require("../Models/SousCateGorie");
const Produit_1 = require("../Models/Produit");
class Ikea {
    constructor() {
        this.details = "https://www.ikea.com/fr/fr/p/";
        this.requestAsync = (url) => {
            return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
                yield fetch(url)
                    .then((res) => res.json())
                    .then((res) => resolve(res))
                    .catch((err) => rejects(err));
            }));
        };
        this.requestAsyncForMore = (url) => {
            url = url.replace(/window_last=24/gi, 'window_last=4008');
            return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
                yield fetch(url)
                    .then((res) => res.json())
                    .then((res) => resolve(res))
                    .catch((err) => rejects(err));
            }));
        };
        this.requestAsyncForMinus = (url) => {
            url = url.replace(/window_last=24/gi, 'window_last=2');
            return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
                yield fetch(url)
                    .then((res) => res.json())
                    .then((res) => resolve(res))
                    .catch((err) => rejects(err));
            }));
        };
        /*this._commode ="https://www.ikea.com/fr/fr/cat/commodes-et-caissons-st004/";
        this._dessert = "https://www.ikea.com/fr/fr/cat/dessertes-et-ilots-fu005/";
        this._jardin = "https://www.ikea.com/fr/fr/cat/mobilier-de-jardin-od003/";
        this._cafe = "https://www.ikea.com/fr/fr/cat/mobilier-pour-bar-19141/";
        this._buffet = "https://www.ikea.com/fr/fr/cat/dessertes-buffets-et-consoles-30454/"
        this._lit = "https://www.ikea.com/fr/fr/cat/lit-bm003/";
        this._armoir = "https://www.ikea.com/fr/fr/cat/armoires-19053/";
        this._biblio = "https://www.ikea.com/fr/fr/cat/bibliotheques-et-etageres-st002/";
        this._meubleTV = "https://www.ikea.com/fr/fr/cat/meubles-tv-solutions-media-10475/"
        this._canape = "https://www.ikea.com/fr/fr/cat/canapes-et-fauteuils-fu003/"
        this._url = "https://w102a21be.api.esales.apptus.cloud/api/v1/panels/product-search?sessionKey=e30a1775-0391-4fad-356d-2b75f30f5b48&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.window_first=1&arg.window_last=48&arg.search_phrase=canape&arg.sort_by=relevance%20desc&arg.catalog_root=category_catalog_frfr%3A%27root%27&arg.catalog_filter=type%3A%27functional%27%20OR%20type%3A%27products%27&arg.nr_catalog_categories=3&arg.locale=fr_FR&arg.filter=market%3A%27FRFR%27";
*/
        this._taux = 0.4;
        //Cuisine
        this._meubleCuisine = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2724254%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 13, 3];
        this._cuisineComplete = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2722957%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 14, 3];
        this._electromenager = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27ka002%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 15, 3];
        this._planDeTravail = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2724264%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 16, 3];
        this._AmenagementInterieur = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2724255%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 17, 3];
        this._rangementInterieur = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2720676%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 18, 3];
        this._eclairageInt = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=99e4f67b-cec7-4167-358d-a7f8c89f504e&customerKey=31d0490b-5ef1-4932-3de4-12d9d29c4d88&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2716282%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 19, 3];
        //Moblier
        this._commode = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27st004%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 11, 1];
        this._table = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products-color?sessionKey=322d992a-397b-44e1-3cbf-c47e2d755cb6&customerKey=e29d2809-caa9-4542-8705-ff9f445ce13c&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27fu004%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 12, 1];
        this._chaise = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products-color?sessionKey=322d992a-397b-44e1-3cbf-c47e2d755cb6&customerKey=e29d2809-caa9-4542-8705-ff9f445ce13c&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27fu002%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 5, 1];
        this._dessert = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27fu005%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 10, 1];
        this._jardin = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27od003%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 9, 1];
        this._cafe = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2719141%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 8, 1];
        this._buffet = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2730454%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 4, 1];
        this._lit = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27bm003%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 2, 1];
        this._armoir = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2719053%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 1, 1];
        this._biblio = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27st002%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 7, 1];
        this._meubleTV = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%2710475%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 6, 1];
        this._canape = ["https://w102a21be.api.esales.apptus.cloud/api/v1/panels/category-products?sessionKey=d680d6ca-b9ac-4826-386a-7486c744226e&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.market=FRFR&arg.selected_category=category_catalog_frfr%3A%27fu003%27&arg.window_first=1&arg.window_last=24&arg.sort_by=relevance", 3, 1];
        this._url = "https://w102a21be.api.esales.apptus.cloud/api/v1/panels/product-search?sessionKey=e30a1775-0391-4fad-356d-2b75f30f5b48&customerKey=efc41ebf-9ed4-477e-3322-340b8180c82e&market=FRFR&arg.window_first=1&arg.window_last=48&arg.search_phrase=canape&arg.sort_by=relevance%20desc&arg.catalog_root=category_catalog_frfr%3A%27root%27&arg.catalog_filter=type%3A%27functional%27%20OR%20type%3A%27products%27&arg.nr_catalog_categories=3&arg.locale=fr_FR&arg.filter=market%3A%27FRFR%27";
        this._total = [this._canape, this._meubleTV, this._biblio, this._armoir, this._lit, this._buffet, this._cafe, this._jardin, this._dessert, this._commode, this._table, this._chaise];
        this._totalCuisine = [this._meubleCuisine, this._cuisineComplete, this._electromenager, this._planDeTravail, this._AmenagementInterieur, this._rangementInterieur, this._eclairageInt];
    }
    get url() {
        return this._url;
    }
    ikeaDetails(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            let base = this.details + keyword;
            yield scrapeIt(base, {
                title: ".uppercase.bold.pip-header-font",
                image: {
                    listItem: ".range-carousel__image",
                    data: {
                        img: {
                            selector: ".range-carousel__image > img",
                            attr: "src"
                        }
                    }
                },
                desc: ".product-pip__benefit-summary",
                price: {
                    selector: ".js-pip-price-component.no-margin span meta:nth-child(2)",
                    attr: "content"
                },
                rating: {
                    selector: ".js-reviews-link:first-child meta",
                    attr: "content",
                },
                proposSelectText: ".product-pip__variations-price-disclaimer",
                proposImage: {
                    listItem: ".popover-select__content.popover-select--length-2 .product-variation",
                    data: {
                        items: ".product-variation__label",
                    }
                },
                description: {
                    listItem: "#pip_product_description .range-expandable__paragraf.no-margin",
                    data: {
                        value: "",
                    }
                },
                dimension: {
                    listItem: "#pip_dimensions .product-pip__definition-list-item-container",
                    data: {
                        itemName: "dt",
                        itemValue: "dd",
                    }
                },
                conseilEntretien: ".range-expandable__paragraf .no-margin",
            }).then((meta) => {
                meta.data.conseilEntretien = meta.data.conseilEntretien.split('.');
                base = meta.data;
            });
            return base;
        });
    }
    filterWithSearch(attribut) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Produit_1.Produit.findOne({ ident: attribut.id }).then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result !== null) {
                    console.log("non vide", result);
                    return result;
                }
                else {
                    console.log("vide", result);
                    const tcheck = {};
                    tcheck.name = attribut.name;
                    tcheck.ident = attribut.id;
                    tcheck.profil = attribut.main_image_url;
                    tcheck.price = ((parseInt(attribut.price_numeral, 10) * 655) + (parseInt(attribut.price_numeral, 10) * 655 * this._taux)).toString();
                    tcheck.catalog_name = attribut.catalog_name;
                    tcheck.type_name = attribut.type_name;
                    tcheck.material_name = attribut.material_name;
                    tcheck.desc = attribut.benefit_list;
                    tcheck.is_new = attribut.is_new_product;
                    tcheck.color_name = attribut.color_name;
                    tcheck.url = attribut.pip_url;
                    tcheck.rating_value = attribut.rating_value;
                    tcheck.valid_design_text = attribut.valid_design_text;
                    tcheck.souscategorie = "0";
                    const product = new Produit_1.Produit(tcheck);
                    yield product.save().then((resss) => {
                        return resss;
                    }).catch((errr) => console.log("pas enregistré", errr));
                }
            })).catch(errors => console.log("req Find One inopérante parce que:", errors));
        });
    }
    ikeaSearch(keyword, min, max) {
        let urls = "https://w102a21be.api.esales.apptus.cloud/api/v1/panels/product-search?sessionKey=02d69495-62a5-49bb-3f53-895dc1d83ed6&customerKey=10b6c815-0184-41fa-3365-5329c3d125bc&market=FRFR&arg.window_first=" + min + "&arg.window_last=" + max + "&arg.search_phrase=" + keyword + "%C3%A9&arg.sort_by=relevance%20desc&arg.catalog_root=category_catalog_frfr%3A%27root%27&arg.catalog_filter=type%3A%27functional%27%20OR%20type%3A%27products%27&arg.nr_catalog_categories=3&arg.locale=fr_FR&arg.filter=market%3A%27FRFR%27";
        const search = '.*' + keyword + '.*';
        return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
            yield Produit_1.Produit.find({ $or: [{ "type_name": { '$regex': search } }, { "catalog_name": { '$regex': search } }] }).then((ress) => __awaiter(this, void 0, void 0, function* () {
                if (ress.length >= 20) {
                    console.log("il y a res", ress.length);
                    next(ress);
                }
                else {
                    console.log("il n'y a pas de ress", ress);
                    let ell = [];
                    try {
                        yield fetch(urls)
                            .then((res) => res.json())
                            .then((res) => __awaiter(this, void 0, void 0, function* () {
                            ell = res.mainResult[1].products;
                            let focuss = yield ell.map((value, index, array) => this.filterWithSearch(value.attributes));
                            yield Produit_1.Produit.find({ $or: [{ "type_name": { '$regex': search } }, { "catalog_name": { '$regex': search } }] })
                                .then(resultat => {
                                next(resultat);
                            }).catch(errorss => next(errorss));
                        }))
                            .catch((err) => next(err));
                    }
                    catch (e) {
                        console.log("Problème de Connexion");
                        next({ error: "problème de connexion" });
                    }
                }
            })).catch(err => {
                console.log("Mauvaise requète", err);
                next(err);
            });
        }));
        /*return new Promise(async (resolve, rejects)=>{
            await fetch(urls)
                .then((res:any) => res.json())
                .then((res:any) => resolve(res))
                .catch((err:any)=> rejects(err))
        })*/
    }
    home() {
        return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
            yield SousCateGorie_1.SousCategorie.find({ Categorie: 1 }).sort({ name: 1 }).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (res.length !== 0) {
                    console.log("il y a res", res.length);
                    next(res);
                }
                else {
                    console.log("il n'y a pas de ress", res);
                    let ell = [];
                    try {
                        let data = yield Promise.all(this._total.map((value, index) => this.requestAsync(value[0])));
                        for (let i = 0; i < data.length; i++) {
                            let tcheck = {};
                            tcheck.numberTotal = parseInt(data[i].categoryOverview[0].categoryTree.productCount, 10);
                            tcheck.name = data[i].categoryOverview[0].categoryTree.displayName;
                            tcheck.ident = this._total[i][1];
                            tcheck.Categorie = 1;
                            if (tcheck.ident === 5 || tcheck.ident === 12) {
                                tcheck.products = data[i].categoryProducts[1].products.map((value, index) => {
                                    return { name: value.attributes.name, ident: value.attributes.id, profil: value.attributes.main_image_url, price: ((parseInt(value.attributes.price_numeral, 10) * 655) + (parseInt(value.attributes.price_numeral, 10) * 655 * this._taux)).toString(), catalog_name: value.attributes.catalog_name, type_name: value.attributes.type_name, material_name: value.attributes.material_name, desc: value.attributes.benefit_list, is_new: value.attributes.is_new_product, color_name: value.attributes.color_name, url: value.attributes.pip_url, rating_value: value.attributes.rating_value, valid_design_text: value.attributes.valid_design_text };
                                });
                            }
                            else {
                                tcheck.products = data[i].categoryProducts[0].products.map((value, index) => {
                                    return { name: value.attributes.name, ident: value.attributes.id, profil: value.attributes.main_image_url, price: ((parseInt(value.attributes.price_numeral, 10) * 655) + (parseInt(value.attributes.price_numeral, 10) * 655 * this._taux)).toString(), catalog_name: value.attributes.catalog_name, type_name: value.attributes.type_name, material_name: value.attributes.material_name, desc: value.attributes.benefit_list, is_new: value.attributes.is_new_product, color_name: value.attributes.color_name, url: value.attributes.pip_url, rating_value: value.attributes.rating_value, valid_design_text: value.attributes.valid_design_text };
                                });
                            }
                            ell.push(tcheck);
                            continue;
                        }
                        ell.map((value, index) => __awaiter(this, void 0, void 0, function* () {
                            const sousCategorieItem = new SousCateGorie_1.SousCategorie(value);
                            yield sousCategorieItem.save().then((ress) => console.log("enregistré avec succès")).catch((errr) => console.log("pas enregistré", errr));
                        }));
                        next(ell);
                    }
                    catch (e) {
                        console.log("Problème de Connexion");
                        next({ error: "problème de connexion" });
                    }
                }
            })).catch(err => {
                console.log("Mauvaise requète", err);
                next(err);
            });
        }));
    }
    homeCuisine() {
        return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
            yield SousCateGorie_1.SousCategorie.find({ Categorie: 3 }).sort({ name: 1 }).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (res.length !== 0) {
                    console.log("il y a res", res.length);
                    next(res);
                }
                else {
                    console.log("il n'y a pas de ress", res);
                    let ell = [];
                    try {
                        let data = yield Promise.all(this._totalCuisine.map((value, index) => this.requestAsync(value[0])));
                        for (let i = 0; i < data.length; i++) {
                            let tcheck = {};
                            tcheck.numberTotal = parseInt(data[i].categoryOverview[0].categoryTree.productCount, 10);
                            tcheck.name = data[i].categoryOverview[0].categoryTree.displayName;
                            tcheck.ident = this._totalCuisine[i][1];
                            tcheck.Categorie = 3;
                            tcheck.products = data[i].categoryProducts[0].products.map((value, index) => {
                                return { name: value.attributes.name, ident: value.attributes.id, profil: value.attributes.main_image_url, price: ((parseInt(value.attributes.price_numeral, 10) * 655) + (parseInt(value.attributes.price_numeral, 10) * 655 * this._taux)).toString(), catalog_name: value.attributes.catalog_name, type_name: value.attributes.type_name, material_name: value.attributes.material_name, desc: value.attributes.benefit_list, is_new: value.attributes.is_new_product, color_name: value.attributes.color_name, url: value.attributes.pip_url, rating_value: value.attributes.rating_value, valid_design_text: value.attributes.valid_design_text };
                            });
                            ell.push(tcheck);
                            console.log(ell.length);
                            continue;
                        }
                        ell.map((value, index) => __awaiter(this, void 0, void 0, function* () {
                            const sousCategorieItem = new SousCateGorie_1.SousCategorie(value);
                            yield sousCategorieItem.save().then((ress) => console.log("enregistré avec succès")).catch((errr) => console.log("pas enregistré", errr));
                        }));
                        next(ell);
                    }
                    catch (e) {
                        console.log("Problème de Connexion");
                        next(new Error("problème de connexion"));
                    }
                }
            })).catch(err => {
                console.log("Mauvaise requète", err);
                next(err);
            });
        }));
    }
    getProductByCategorie(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let element = [];
            for (let j = 0; j < this._total.length; j++) {
                if (this._total[j][1] === key)
                    element = this._total[j];
            }
            return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
                yield Produit_1.Produit.find({ souscategorie: element[1] }).then((res) => __awaiter(this, void 0, void 0, function* () {
                    if (res.length > 0) {
                        console.log("trouvé produit de cette categorie", res.length);
                        let datas = yield SousCateGorie_1.SousCategorie.find({ Categorie: element[2] }).sort({ name: 1 });
                        next({ data: res, datas: datas, concerne: element[1] });
                    }
                    else {
                        try {
                            let datas = yield SousCateGorie_1.SousCategorie.find({ Categorie: element[2] }).sort({ name: 1 });
                            let data = yield this.requestAsyncForMore(element[0]);
                            let ell = [];
                            for (let i = 0; i < data.categoryProducts[0].products.length; i++) {
                                const tcheck = {};
                                tcheck.name = data.categoryProducts[0].products[i].attributes.name;
                                tcheck.ident = data.categoryProducts[0].products[i].attributes.id;
                                tcheck.profil = data.categoryProducts[0].products[i].attributes.main_image_url;
                                tcheck.price = ((parseInt(data.categoryProducts[0].products[i].attributes.price_numeral, 10) * 655) + (parseInt(data.categoryProducts[0].products[i].attributes.price_numeral, 10) * 655 * this._taux)).toString();
                                tcheck.catalog_name = data.categoryProducts[0].products[i].attributes.catalog_name;
                                tcheck.type_name = data.categoryProducts[0].products[i].attributes.type_name;
                                tcheck.material_name = data.categoryProducts[0].products[i].attributes.material_name;
                                tcheck.desc = data.categoryProducts[0].products[i].attributes.benefit_list;
                                tcheck.is_new = data.categoryProducts[0].products[i].attributes.is_new_product;
                                tcheck.color_name = data.categoryProducts[0].products[i].attributes.color_name;
                                tcheck.url = data.categoryProducts[0].products[i].attributes.pip_url;
                                tcheck.rating_value = data.categoryProducts[0].products[i].attributes.rating_value;
                                tcheck.valid_design_text = data.categoryProducts[0].products[i].attributes.valid_design_text;
                                tcheck.souscategorie = element[1];
                                ell.push(tcheck);
                                continue;
                            }
                            ell.map((value, index) => __awaiter(this, void 0, void 0, function* () {
                                const ProduitItem = new Produit_1.Produit(value);
                                yield ProduitItem.save().then((ress) => console.log("enregistré avec succès")).catch((errr) => console.log("pas enregistré"));
                            }));
                            next({ data: ell, datas: datas, concerne: element[1] });
                        }
                        catch (e) {
                            next(e);
                        }
                    }
                })).catch(err => {
                    next(err);
                });
            }));
        });
    }
    getProductByCategorieC(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let element = [];
            for (let j = 0; j < this._totalCuisine.length; j++) {
                if (this._totalCuisine[j][1] === key)
                    element = this._totalCuisine[j];
            }
            return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
                yield Produit_1.Produit.find({ souscategorie: element[1] }).then((res) => __awaiter(this, void 0, void 0, function* () {
                    if (res.length > 0) {
                        let datas = yield SousCateGorie_1.SousCategorie.find({ Categorie: element[2] }).sort({ name: 1 });
                        next({ data: res, datas: datas, concerne: element[1] });
                    }
                    else {
                        try {
                            let datas = yield SousCateGorie_1.SousCategorie.find({ Categorie: element[2] }).sort({ name: 1 });
                            let data = yield this.requestAsyncForMore(element[0]);
                            let ell = [];
                            for (let i = 0; i < data.categoryProducts[0].products.length; i++) {
                                const tcheck = {};
                                tcheck.name = data.categoryProducts[0].products[i].attributes.name;
                                tcheck.ident = data.categoryProducts[0].products[i].attributes.id;
                                tcheck.profil = data.categoryProducts[0].products[i].attributes.main_image_url;
                                tcheck.price = ((parseInt(data.categoryProducts[0].products[i].attributes.price_numeral, 10) * 655) + (parseInt(data.categoryProducts[0].products[i].attributes.price_numeral, 10) * 655 * this._taux)).toString();
                                tcheck.catalog_name = data.categoryProducts[0].products[i].attributes.catalog_name;
                                tcheck.type_name = data.categoryProducts[0].products[i].attributes.type_name;
                                tcheck.material_name = data.categoryProducts[0].products[i].attributes.material_name;
                                tcheck.desc = data.categoryProducts[0].products[i].attributes.benefit_list;
                                tcheck.is_new = data.categoryProducts[0].products[i].attributes.is_new_product;
                                tcheck.color_name = data.categoryProducts[0].products[i].attributes.color_name;
                                tcheck.url = data.categoryProducts[0].products[i].attributes.pip_url;
                                tcheck.rating_value = data.categoryProducts[0].products[i].attributes.rating_value;
                                tcheck.valid_design_text = data.categoryProducts[0].products[i].attributes.valid_design_text;
                                tcheck.souscategorie = element[1];
                                ell.push(tcheck);
                                continue;
                            }
                            ell.map((value, index) => __awaiter(this, void 0, void 0, function* () {
                                const ProduitItem = new Produit_1.Produit(value);
                                yield ProduitItem.save().then((ress) => console.log("enregistré avec succès")).catch((errr) => console.log("pas enregistré"));
                            }));
                            next({ data: ell, datas: datas, concerne: element[1] });
                        }
                        catch (e) {
                            next(e);
                        }
                    }
                })).catch(err => {
                    next(err);
                });
            }));
        });
    }
}
exports.default = Ikea;
//# sourceMappingURL=Ikea.js.map