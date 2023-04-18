import axios from 'axios';
import { ACCOUNT_CREATED, FOOD_ADDED, ERROR} from '../types';
import { DB_URL } from '../../url';

export const newFoodItem=(foodname,price,desc,img1,img2)=>async dispatch=>{
    try{
        const FoodItem={
            foodname:foodname,
            price:price,
            desc: desc,
            img1: img1,
            img2:img2,
          }
         const res=await axios.post(`${DB_URL}/remotecafe/post`,FoodItem)

         dispatch({
            type:FOOD_ADDED,
            payload:res
         })
    }
    catch(err){
        dispatch({
            type:ERROR,
            payload:err
         })
    }

}


export const createAccount=(custname,phone,email,pass2)=>async dispatch=>{
    try{
        const newCust={
            name:custname,
            phone:phone,
            email:email,
            pass:pass2
          }
         const res=await axios.post(`${DB_URL}/remotecafe/signup`,newCust)

         dispatch({
            type:ACCOUNT_CREATED,
            payload:res
         })
    }
    catch(err){
        dispatch({
            type:ERROR,
            payload:err
         })
    }

}