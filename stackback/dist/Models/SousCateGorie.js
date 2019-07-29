"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SousCategorieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    ident: {
        type: Number,
        required: true,
    },
    numberTotal: {
        type: Number,
        required: true,
    },
    Categorie: {
        type: Number,
        required: true,
    },
    products: [{ name: String, ident: String, profil: String, price: String, catalog_name: String, type_name: String, material_name: String, desc: String, is_new: String, color_name: String, url: String, rating_value: String, valid_design_text: String }],
    register_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: null },
});
exports.SousCategorie = mongoose_1.model('SousCategorie', SousCategorieSchema);
//# sourceMappingURL=SousCateGorie.js.map