
const initState = {
    compareProduct:[],
    pannierProduct:[],
    openModalCompare:false,
    openModalShare:false,
    shareContent:{}
}


const rootReducer = (state=initState,action)=> {

    switch (action.type) {
        case "ADD_COMPARE":
            const newState = state.compareProduct
            if(newState.length < 2){
                newState.push(action.item)
                return {
                    ...state,
                    openModalCompare:true,
                    compareProduct:newState
                }
            }
            else {
                return {...state,openModalCompare:true}
            }
            break;
        default:
            return state;
    }
    return state;
    
}
export default rootReducer;