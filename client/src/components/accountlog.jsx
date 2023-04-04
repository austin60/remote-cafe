import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {MdOutlineLogin,MdPersonAddAlt}from "react-icons/md";

const AccountLogs = (props) => {
 const {open,onCloseModal,onOpenModal2,open2,onCloseModal2,custname,phone,email,pass1,pass2,
  handleChange,createAccount,lemail,lphone,accountLogin}=props

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="logmodal">
        <h2 className='su'>Log in <MdOutlineLogin/></h2>
        <input type="text" placeholder='*phone number' className='input' value={lphone} onChange={handleChange("lphone")}/>
        <input type="text" placeholder='*email' className='input' value={lemail} onChange={handleChange("lemail")}/>
        <button className='btn' onClick={accountLogin}>Login</button>
        <p className='error-message'   id='err'></p>
        <span className='su'>or</span>
        <p className='su' onClick={onOpenModal2}><u>create account</u></p>
        </div>
      </Modal>
      <Modal open={open2} onClose={onCloseModal2} center>
        <div className="logmodal">
        <h2 className='su'>Create Account <MdPersonAddAlt/></h2>
        <input type="text" placeholder='*name' className='input' value={custname} onChange={handleChange("custname")}/>
        <input type="text" placeholder='*phone ' className='input' value={phone} onChange={handleChange("phone")}/>
        <input type="text" placeholder='*email' className='input'value={email} onChange={handleChange("email")}/>
        <input type="text" placeholder='*new password' className='input'value={pass1} onChange={handleChange("pass1")}/>
        <input type="text" placeholder='*confirm password' className='input'value={pass2} onChange={handleChange("pass2")}/>
        <button className='input'onClick={createAccount}>Sign Up</button>
        <span className='error-message' id='error'>*private infomation will not be shared</span>
        </div>
      </Modal>
    </div>
  );
};
export default AccountLogs;
