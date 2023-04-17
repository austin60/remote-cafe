import { FOOD_ADDED } from "../types";

export const axiosPostReducer=(state={},action)=>{
 switch(action.type){
    case FOOD_ADDED:
        return{ ...action.payload  }
    default:
        return  state
        
 }
}