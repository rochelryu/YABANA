import * as types from "../Constants/YabaConstant";

const initState = {
    compareProduct:[],
    openModalCompare:false,
}

const CompareReducer = (state=initState,action)=> {

    switch (action.type) {
        case types.ADD_COMPARE:
            const newState = state.compareProduct
            if(newState.length < 2){
                newState.push(action.item)
                return {
                    ...state,
                    openModalCompare:true,
                    compareProduct:newState
                }
            }
            else return {...state,openModalCompare:true}
            break;
        case types.HIDE_COMPARE:
            return {
                ...state,
                openModalCompare:false,
            }
            break;
        case types.REMOVE_COMPARE:
            return {
                ...state,
                openModalCompare:false,
                compareProduct:[]
            }

        default:
            return state;
    }
    return state;

}
export default CompareReducer;