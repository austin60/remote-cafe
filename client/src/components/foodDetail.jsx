//import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { addToOrder } from '../redux/actions/orderActions';

const FoodDetail = (props) => {

  const{fopen,addToOrder,onFCloseModal}=props
  return (
    
    <>
      <Modal open={fopen} onClose={onFCloseModal} center>
        <div className="food-detail">
        <h2>{fopen.foodname}</h2>
           <div className="food-info">
            <div className="food-image">
            <Carousel interval={2000} infiniteLoop={true}>
                <div>
                    <img src={fopen.img1} alt='foodname' />
                  
                </div>
                <div>
                    <img src={fopen.img2} alt='foodname' />
                   
                </div>
            </Carousel>
            </div>
            
       
        <div className="order-info">
            <div className="food-desc">
                <p>{fopen.desc}</p>
            </div>
           
            <div className="order-cost">
                 Price:<b> Ksh{" "}{fopen.price}</b>
            </div>
            <button className='order-btn input'onClick={()=>{addToOrder(fopen);onFCloseModal()}}>Add to Order</button>
        </div>
        </div>
        
        </div>
      </Modal>
    </>
  );
};

const mapDispatchToProps=(dispatch)=>{
 return{
  addToOrder:(orders)=>dispatch(addToOrder(orders))
 }
}
export default connect(null,mapDispatchToProps)(FoodDetail);
