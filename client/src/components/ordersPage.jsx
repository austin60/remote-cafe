import OrderItem from "./oderItem";
import MenuBar from "./menubar";
import PageFooter from "./pagefooter";

const OdersPage=(props)=>{
    const{removeFromOrder,orders,addToOrder}=props
    return(
        <div className="page">
            <MenuBar/>
            <div className="oders-dispay">
                <div className="order-list">
                    <div className="order-title">
                        <span>Dish</span>
                        <span>Quantity</span>
                        <span>Price</span>
                    </div>
                    <div className="order-items">
                          <OrderItem  removeFromOrder={removeFromOrder} orders={orders} addToOrder={addToOrder}/>
                    </div>
                </div>
                <div className="order-payment">
                    <div className="payment-card">
                        <h3>Total</h3>
                        <span className="order-total">ksh 1000</span>
                        <button className="btn">Pay with M-Pesa</button>
                        <span>or</span>
                        <button className="btn">Pay on delivery</button>
                    </div>
                </div>
            </div>
           <PageFooter/>
        </div>
    )
}
export default OdersPage;