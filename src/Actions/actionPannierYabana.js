import * as types from "../Constants/YabaConstant";

export  const addPannier = (item, qty = 1) => ({
    type:types.ADD_PANNIER,
    item:item,
    qty:qty
})
export  const removePannier = (item) => ({
    type:types.REMOVE_PANNIER,
    item:item,
})