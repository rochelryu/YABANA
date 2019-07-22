import {Schema, model, Document} from 'mongoose';

export interface ProduitInterface extends Document{
    name:string, ident:string, profil:string,price:string, catalog_name:string, type_name:string, material_name:string, desc:string, is_new:string, color_name:string, url:string, rating_value:string,valid_design_text:string,
    souscategorie:string,
    register_date:Date,
    update_date:Date,

}
const ProduitSchema = new Schema({
name:String, ident:String, profil:String,price:String, catalog_name:String, type_name:String, material_name:String, desc:String, is_new:String, color_name:String, url:String, rating_value:String,valid_design_text:String,
    souscategorie:String,
    register_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: null },
});
export const Produit = model<ProduitInterface>('Produit', ProduitSchema)