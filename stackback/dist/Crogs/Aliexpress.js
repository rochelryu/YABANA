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
class Aliexpress {
    constructor() {
    }
    searchAlie() {
        return __awaiter(this, void 0, void 0, function* () {
            let fake = "https://kigagets.ukiki.me/categories/electronics";
            //let base = "https://fr.aliexpress.com/wholesale?catId=0&SearchText=" + keyword + "%24page%3D" + page;
            console.log(fake);
            yield scrapeIt(fake, {
                counter: ".search-result p.result-overview strong.search-count",
                produits: {
                    listItem: ".list-item .item",
                    data: {
                        link: {
                            selector: ".img.img-border .picRind",
                            attr: "href"
                        },
                        img: {
                            selector: ".img.img-border .picCore.pic-Core-v",
                            attr: "src"
                        },
                        color: ".has-sku-image .j-p4plog",
                        desc: ".info h3 .product.j-p4plog",
                        price: ".price.price-m .value",
                        rating: {
                            selector: ".rate-history .star.star-s",
                            attr: 'title'
                        },
                    }
                }
            }).then((meta) => {
                console.log(`Status Code: ${meta.response.statusCode}`);
                fake = meta.data;
                console.log(fake.length);
            });
            return fake;
            /*let data:any;
            await scrapeIt(fake, {
                produits:{
                    listItem:".col.col-12.col-lg-9.order-0.order-lg-1 .row",
                    data:{
                        link:{
                            selector: ".col.col-12.col-lg-3 a",
                            attr: "href"
                        },
                        img: {
                            selector:".col.col-12.col-lg-3 .thumbnail",
                            attr:"src"
                        },
                        desc:".col.col-12.col-lg-9.flex.flex-col .text-center.mb-8 .text-xl a",
                        price:".col.col-12.col-lg-9.flex.flex-col .flex.items-center .line-through",
                        priceL:".col.col-12.col-lg-9.flex.flex-col .flex.items-center .text-lg",
                    }
                }
            }).then((meta:any) => {
                console.log(`Status Code: ${meta.response.statusCode}`)
                fake = meta.data;
                console.log(fake.length)
            })
            return fake;*/
            //let result = await data.json();
        });
    }
}
exports.default = Aliexpress;
//# sourceMappingURL=Aliexpress.js.map