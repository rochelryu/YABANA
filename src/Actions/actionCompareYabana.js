import * as types from '../Constants/YabaConstant'


export  const addCompare = (item) => ({
    type:types.ADD_COMPARE,
    item:item
})

export  const removeCompare = () => ({
    type:types.REMOVE_COMPARE,
})
export  const hideCompare = () => ({
    type:types.HIDE_COMPARE,
})