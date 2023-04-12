import { ADD_ORDER, REMOVE_ORDER, SUBTRACT_ORDER } from "../types"

const initState=JSON.parse(localStorage.getItem("orders"))||[]

export const ordersReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_ORDER:
            return [...action.payload];
        case SUBTRACT_ORDER:
            return [...action.payload];
        case REMOVE_ORDER:
            return [...action.payload]
        default:return state
    }
}