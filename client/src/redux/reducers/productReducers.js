const { FETCH_DATA } = require("../types");


export const productsReducer=(state=[],action)=>{
    switch(action.type){
        case FETCH_DATA:
            return[...action.payload];
        default:
            return state;
    }
}