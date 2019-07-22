"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProduitSchema = new mongoose_1.Schema({
    name: String, ident: String, profil: String, price: String, catalog_name: String, type_name: String, material_name: String, desc: String, is_new: String, color_name: String, url: String, rating_value: String, valid_design_text: String,
    souscategorie: String,
    register_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: null },
});
exports.Produit = mongoose_1.model('Produit', ProduitSchema);
//# sourceMappingURL=Produit.js.map