import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {MdOutlineLogin,MdPersonAddAlt}from "react-icons/md";

const AccountLogs = () => {
  const [open, setOpen] = useState(false);

  const [open2, setOpen2] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => {setOpen2(false);setOpen(false)}

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="logmodal">
        <h2 className='su'>Log in <MdOutlineLogin/></h2>
        <input type="text" placeholder='Enter phone number' className='input'/>
        <input type="text" placeholder='Enter email' className='input'/>
        <button className='input'>login</button>
        <span className='su'>or</span>
        <p className='su' onClick={onOpenModal2}><u>create account</u></p>
        </div>
      </Modal>
      <Modal open={open2} onClose={onCloseModal2} center>
        <div className="logmodal">
        <h2 className='su'>Create Account <MdPersonAddAlt/></h2>
        <input type="text" placeholder='Enter name' className='input'/>
        <input type="text" placeholder='Enter phone number' className='input'/>
        <input type="text" placeholder='Enter email' className='input'/>
        <input type="text" placeholder='Enter password' className='input'/>
        <input type="text" placeholder='Confirm password' className='input'/>
        <button className='input'>Sign Up</button>
        <span className='error-message'>*private infomation will not be shared</span>
        </div>
      </Modal>
    </div>
  );
};
export default AccountLogs;
