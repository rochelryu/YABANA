import {Schema, model, Document} from 'mongoose'; // Un Schema detient les caractéristiques d'un model. Un model peut être perçu comme Une Table du coup le schema vous pouvez le voir comme les différentes colones de notre Tables

export interface UsersInterface extends Document{
    name:string,
    firstname:string,
    email:string,
    numero:string,
    commandes:any[],
    ident:number,
    profil:string,
    register_date:Date,
    login_date:Date,
    address:string,
    etat:number,
    recovery:number,
    password:string
}
const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type:String
    },
    ident:{
        type:Number,
        required:true,
    },
    firstname:{
        type: String,
    },
    email:{
        type:String,
    },
    profil:{
        type:String,
        default: 'account.png'
    },
    numero:{
        type:String,
    },
    commandes:[{itemName:String,itemProfil:String,itemLink:String,itemPrice:Number,itemIdent:Number, numberProduct:Number, etat:Number}],
    etat:{
      type:Number,
      required: true
    },
    address:{type:String},
    recovery:{type:Number, default: Math.floor(Math.random()*9999)},
    register_date: { type: Date, default: Date.now },
    login_date: { type: Date, default: null },
});
export const User = model<UsersInterface>('User', UserSchema);