import { ACCOUNT_CREATED, FOOD_ADDED } from "../types";

export const axiosPostReducer=(state={},action)=>{
 switch(action.type){
    case FOOD_ADDED:
        return{  ...action.payload  }
    case ACCOUNT_CREATED:
        return{...action.payload}
    default:
        return  state
        
 }
}