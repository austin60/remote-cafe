import OrderItem from "./oderItem";
import MenuBar from "./menubar";
import PageFooter from "./pagefooter";



const OdersPage=(props)=>{
    const{orders,handleChange,makeOrder}=props
    return(
        <div className="page">
            <MenuBar handleChange={handleChange}/>
            <div className="oders-dispay">
                <div className="order-list">
                    <div className="order-title">
                        <span>Dish</span>
                        <span>Quantity</span>
                        <span>Price</span>
                    </div>
                    <div className="order-items">
                          <OrderItem />
                    </div>
                </div>
                <div className="order-payment">
                    <div className="payment-card">
                        <h3>Total</h3>
                        <span className="order-total"><b> ksh {" "}
                        {orders.reduce((a,c)=>a+c.price*c.count,0)}
                        { sessionStorage.setItem('amount',JSON.stringify(orders.reduce((a,c)=>a+c.price*c.count,0))) }</b></span>
                        <button className="btn" onClick={makeOrder}>Pay with M-Pesa</button>
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