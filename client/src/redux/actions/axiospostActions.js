import axios from 'axios';
import { ACCOUNT_CREATED, FOOD_ADDED } from '../types';

export const newFoodItem=(foodname,price,desc,img1,img2)=>async dispatch=>{
    try{
        const FoodItem={
            foodname:foodname,
            price:price,
            desc: desc,
            img1: img1,
            img2:img2,
          }
         const res=await axios.post("/remotecafe/post",FoodItem)

         dispatch({
            type:FOOD_ADDED,
            payload:res
         })
    }
    catch(err){
        dispatch({
            type:FOOD_ADDED,
            payload:err
         })
    }

}

export const createAccount=(custname,phone,email,pass1,pass2)=>async dispatch=>{
    try{
        const numbers=/[\d]/g;
        const letters=/[\D]/gi;
        const validEmail=/[a-zA-Z0-9_\-.]+[@][a-z]+[.][a-z]{2,3}/g;
        const validPass=/[A-Z0-9]/g;
      
        const element=document.getElementById('error');
        if(custname===""||phone===""||email===""||pass1===""){
          element.innerHTML='*fill all fields'
        }
        else if(numbers.test(custname)){
          element.innerHTML='*avoid numbers in name field'
        }
        else if(letters.test(phone)||phone.length<10){
          element.innerHTML='*enter valid mobile number'
        }
        else if(!validEmail.test(email)){
          element.innerHTML='*enter valid email'
        }
        else if(pass1.length<8){
          element.innerHTML='*password set to a minimum of 8 characters'
        }
        else if(pass2!==pass1){
          element.innerHTML='*password mismatch'
        }
        else if(!validPass.test(pass2)){
          element.innerHTML='*password should have atleast one capital letter and number'
        }
        else{
          const newCust={
            name:custname,
            phone:phone,
            email:email,
            pass:pass2
          }
          const res=axios.post("/remotecafe/signup",newCust)
          //console.log(newCust)
          dispatch({
            type:ACCOUNT_CREATED,
            payload:res.data
          })
        } 
          

    }
    catch(err){

    }
}