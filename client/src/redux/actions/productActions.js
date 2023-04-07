import { FETCH_PRODUCTS } from "../types";
import axios from 'axios';

export const fetchProducts=()=>async dispatch=>{
    const res= await axios.get("/remotecafe/")

    dispatch({
        type:FETCH_PRODUCTS,
        payload:res.data
    })
}