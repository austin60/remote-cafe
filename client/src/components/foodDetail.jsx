//import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {MdAdd}from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

const FoodDetail = (props) => {

  const{fopen,quantity,addToOrder}=props
  return (
    
    <>
      <Modal open={fopen} onClose={props.onFCloseModal} center>
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
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum beatae nobis similique suscipit ea aut blanditiis recusandae accusantium, nulla et perspiciatis 
                    sunt quos quae alias repellendus voluptate minus aperiam</p>
            </div>
            <div className="order-specs">
                <button className='quant-btn minus'><AiOutlineMinus/></button>
                <div className="quantity">{quantity}</div>
                <button className='quant-btn add'><MdAdd/></button>
            </div>
            <div className="order-cost">
                 <b>Total: Ksh{" "}</b>500
            </div>
            <button className='order-btn input'onClick={()=>addToOrder(fopen)}>Add to Order</button>
        </div>
        </div>
        
        </div>
      </Modal>
    </>
  );
};
export default FoodDetail;
