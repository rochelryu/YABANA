import * as types from "../Constants/YabaConstant";

const initState = {
    pannierProduct:localStorage.getItem("panier")? JSON.parse(localStorage.getItem("panier")):[],
    sommeByu:0,
}
for(let i in initState.pannierProduct){
    initState.sommeByu += (parseInt(initState.pannierProduct[i].item.price,10)*initState.pannierProduct[i].qty)
}

const PannierReducer = (state=initState,action)=> {
    switch (action.type) {
        case types.ADD_PANNIER:
            let newStates = state.pannierProduct;
            let mem = -1;
            let sum = 0;
            for(let i in newStates){
                if(JSON.stringify(newStates[i].item) === JSON.stringify(action.item)) {mem = i}
                continue;
            }
            if(mem !== -1) {
                newStates[mem].qty += 1;
                for(let i in newStates){
                    sum += (parseInt(newStates[i].item.price,10)*newStates[i].qty);
                    continue
                }
                localStorage.setItem("panier",JSON.stringify(newStates));
                return {
                    pannierProduct:newStates,
                    sommeByu:sum
                };
            }else {
                newStates.push({item:action.item,qty:1});
                for(let i in newStates){
                    sum += (parseInt(newStates[i].item.price,10)*newStates[i].qty);
                    continue
                }
                localStorage.setItem("panier",JSON.stringify(newStates));
                return {
                    pannierProduct:newStates,
                    sommeByu:sum
                };
            }
            break;
        case types.REMOVE_PANNIER:
            let newStatess = state.pannierProduct;
            let mems = -1;
            let sums = 0;
            for(let i in newStatess){
                if(JSON.stringify(newStatess[i].item) === JSON.stringify(action.item)) {
                    mems = i
                }
                continue;
            }
            newStatess.splice(mems,1);
            for(let i in newStatess){
                sums += (parseInt(newStatess[i].item.price,10)*newStatess[i].qty);
                continue
            }
            localStorage.setItem("panier",JSON.stringify(newStatess));
            return {
                pannierProduct:newStatess,
                sommeByu:sums
            };
            break;
        case types.DIMINUE_PANNIER:
            let newStatesss = state.pannierProduct;
            let memss = -1;
            let sumss = 0;
            for(let i in newStatesss){
                if(JSON.stringify(newStatesss[i].item) === JSON.stringify(action.item)) {
                    memss = i
                }
                continue;
            }
            newStatesss[memss].qty--;
            for(let i in newStatesss){
                sumss += (parseInt(newStatesss[i].item.price,10)*newStatesss[i].qty);
                continue
            }
            localStorage.setItem("panier",JSON.stringify(newStatesss));
            return {
                pannierProduct:newStatesss,
                sommeByu:sumss
            };
            break;
        case types.AUGMENTE_PANNIER:
            let newSta = state.pannierProduct;
            let me = -1;
            let su = 0;
            for(let i in newSta){
                if(JSON.stringify(newSta[i].item) === JSON.stringify(action.item)) {
                    me = i
                }
                continue;
            }
            newSta[me].qty++;
            for(let i in newSta){
                su += (parseInt(newSta[i].item.price,10)*newSta[i].qty);
                continue
            }
            localStorage.setItem("panier",JSON.stringify(newSta));
            return {
                pannierProduct:newSta,
                sommeByu:su
            };
            break;
        default:
            return state;
    }
    return state;
}
export default PannierReducer;