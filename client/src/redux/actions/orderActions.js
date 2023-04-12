import { ADD_ORDER, REMOVE_ORDER, SUBTRACT_ORDER } from "../types";

export const addToOrder=(order)=>(dispatch,getState)=>{
    const orderItem=getState().orders.slice();
    let  alreadyIncart=false;

    orderItem.forEach(item=>{
        if(item._id===order._id){
            item.count++;
            alreadyIncart=true
        }
    })

    if(!alreadyIncart){
        orderItem.push({...order,count:1})
    }

    dispatch({
        type:ADD_ORDER,
        payload:orderItem
    })
    localStorage.setItem('orders',JSON.stringify(orderItem))
}

export const reduceOrder=(order)=>(dispatch,getState)=>{
    const orderItem=getState().orders.slice();

    orderItem.forEach(item=>{
        if(item._id===order._id){
            if(item.count>1){
                item.count--
            }
        }  
    })

    dispatch({
        type:SUBTRACT_ORDER,
        payload:orderItem
    })
    localStorage.setItem('orders',JSON.stringify(orderItem))
}

export const removeFromOrders=(order)=>(dispatch,getState)=>{
      const orderItem=getState().orders.slice().filter(item=>item._id!==order._id);

     dispatch({
        type:REMOVE_ORDER,
        payload:orderItem
      })
      localStorage.setItem('orders',JSON.stringify(orderItem))
}