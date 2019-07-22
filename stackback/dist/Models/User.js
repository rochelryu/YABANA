"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose"); // Un Schema detient les caractéristiques d'un model. Un model peut être perçu comme Une Table du coup le schema vous pouvez le voir comme les différentes colones de notre Tables
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String
    },
    ident: {
        type: Number,
        required: true,
    },
    firstname: {
        type: String,
    },
    email: {
        type: String,
    },
    profil: {
        type: String,
        default: 'account.png'
    },
    numero: {
        type: String,
    },
    commandes: [{ itemName: String, itemProfil: String, itemLink: String, itemPrice: Number, itemIdent: Number, numberProduct: Number, etat: Number }],
    etat: {
        type: Number,
        required: true
    },
    address: { type: String },
    recovery: { type: Number, default: Math.floor(Math.random() * 9999) },
    register_date: { type: Date, default: Date.now },
    login_date: { type: Date, default: null },
});
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map