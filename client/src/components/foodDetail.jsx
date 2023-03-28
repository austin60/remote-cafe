//import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {MdAdd}from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

const FoodDetail = (props) => {


  return (
    <>
      <Modal open={props.fopen} onClose={props.onFCloseModal} center>
        <div className="food-detail">
        <h2>Chicken Kebab</h2>
           <div className="food-info">
            <div className="food-image">
            <Carousel interval={2000} infiniteLoop={true}>
                <div>
                    <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&ga=GA1.2.1380248698.1679665908&semt=ais" alt='foodname' />
                  
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.1380248698.1679665908&semt=ais" alt='foodname' />
                   
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
                <div className="quantity">2</div>
                <button className='quant-btn add'><MdAdd/></button>
            </div>
            <div className="order-cost">
                 <b>Total: Ksh{" "}</b>500
            </div>
            <button className='order-btn input'>Add to Order</button>
        </div>
        </div>
        
        </div>
      </Modal>
    </>
  );
};
export default FoodDetail;
