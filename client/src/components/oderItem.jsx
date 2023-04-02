const OrderItem=(props)=>{
    const {orders,addToOrder,removeFromOrder,reduceOrder}=props;
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
            <button className="remove" onClick={()=>removeFromOrder(order)}>Remove</button>

        </div>))}
        </>
    )
}
export default OrderItem;