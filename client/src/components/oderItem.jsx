const OrderItem=()=>{
    return(
        <div className="order-item">
            <div className="order-image">
                <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&ga=GA1.2.1380248698.1679665908&semt=ais" alt="" />
            </div>
            <div className="order-name">Chicken Kebab</div>
            <div className="order-quant">
                <button>-</button>
                        2  
                <button className="btn">+</button>
            </div>
            <div className="order-price">
                <b>Ksh 1,000</b>
            </div>
            <button className="remove">Remove</button>

        </div>
    )
}
export default OrderItem;