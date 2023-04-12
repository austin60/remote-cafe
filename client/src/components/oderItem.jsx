import { connect } from "react-redux";
import { addToOrder, reduceOrder, removeFromOrders } from "../redux/actions/orderActions";

const OrderItem=(props)=>{
    const {orders,addToOrder,removeFromOrders,reduceOrder}=props;
    return(
        <>
      {!orders?<div>Nothing yet</div>:orders.map(order=>(<div key={order._id} className="order-item">
            <div className="order-image">
                <img src={order.img1} alt="" />
            </div>
            <div className="order-name">{order.foodname}</div>
            <div className="order-quant">
                <button onClick={()=>reduceOrder(order)}>-</button>
                {order.count}
                <button className="btn" onClick={()=>addToOrder(order)}>+</button>
            </div>
            <div className="order-price">
                Ksh {order.price*order.count}
            </div>
            <button className="remove" onClick={()=>removeFromOrders(order)}>Remove</button>

        </div>))}
        </>
    )
}

const mapStateToProps=state=>{
    return{
        orders:state.orders
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        removeFromOrders:(orders)=>dispatch( removeFromOrders(orders)),
        addToOrder:(orders)=>dispatch(addToOrder(orders)),
        reduceOrder:(orders)=>dispatch(reduceOrder(orders))

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(OrderItem);