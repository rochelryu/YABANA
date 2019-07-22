import {Schema, model, Document} from 'mongoose';
 // Un Schema detient les caractéristiques d'un model. Un model peut être perçu comme Une Table du coup le schema vous pouvez le voir comme les différentes colones de notre Tables

export interface SousCateGorieInterface extends Document{
    name:string,
    numberTotal:number,
    productDemo:any[],
    ident:number,
    Categorie:number,
    register_date:Date,
    update_date:Date,

}
const SousCategorieSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    ident:{
        type:Number,
        required:true,
    },
    numberTotal:{
        type: Number,
        required: true,
    },
    Categorie:{
        type:Number,
        required: true,
    },
    products:[{name:String, ident:String, profil:String,price:String, catalog_name:String, type_name:String, material_name:String, desc:String, is_new:String, color_name:String, url:String, rating_value:String,valid_design_text:String}],
    register_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: null },
});
export const SousCategorie = model<SousCateGorieInterface>('SousCategorie', SousCategorieSchema)