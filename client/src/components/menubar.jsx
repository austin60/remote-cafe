import { useState } from "react";
import { MdRestaurantMenu,MdArrowDropDown, MdOutlineLogin,MdOutlineShoppingBasket,MdArrowDropUp,
    MdOutlineContactSupport,MdPersonOutline,MdLogout } from "react-icons/md";
import{ NavLink} from 'react-router-dom';
import AccountLogs from "./accountlog";

const MenuBar=(props)=>{
   const showDisplay=(idname)=>{
    let x=document.getElementById(idname)
    x.style.display="block"
   }
   const hideDisplay=(idname)=>{
    let x=document.getElementById(idname)
    x.style.display="none"
   }

   const [open, setOpen] = useState(false);
   const [open2, setOpen2] = useState(false);
 
   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);
 
   const onOpenModal2 = () => setOpen2(true);
   const onCloseModal2 = () => {setOpen2(false);setOpen(false)}

   const{custname,phone,email,pass1,pass2,handleChange,createAccount,lemail,lphone,accountLogin}=props
    return(
        <>
        <div className="menubar">
            <div className="icon">
                <span>RC</span>
            </div>
            <div className="menu-items">
                <ul>
                    <li><NavLink to="/"> Menu <MdRestaurantMenu className="menu-icon"/></NavLink></li>
                    <li><NavLink to="/orders"> My Order<MdOutlineShoppingBasket className="menu-icon"/></NavLink></li>
                    <li onMouseEnter={()=>showDisplay("price")} onMouseLeave={()=>hideDisplay("price")}>
                        Price <MdArrowDropDown className="menu-icon"/>
                         <ul className="dropdown" id="price">
                             <li>Lowest<MdArrowDropDown className="menu-icon"/></li>
                             <li>Highest<MdArrowDropUp className="menu-icon"/></li>
                         </ul>
                    </li>
                    <li><NavLink to="/contact" > Contact Us<MdOutlineContactSupport className="menu-icon"/></NavLink></li>
                    <li onMouseEnter={()=>showDisplay("account")}  onMouseLeave={()=>hideDisplay("account")}>
                        Account<MdArrowDropDown className="menu-icon"/>
                         <ul className="dropdown" id="account">
                             <li onClick={onOpenModal}>LogIn<MdOutlineLogin className="menu-icon"/></li>
                             <li>LogOut<MdLogout className="menu-icon"/></li>
                         </ul>
                    </li>
                </ul>
            </div>
        </div>
        <AccountLogs open={open} open2={open2} onOpenModal={onOpenModal} onCloseModal={onCloseModal}
        onCloseModal2={onCloseModal2} onOpenModal2={onOpenModal2} custname={custname} phone={phone}
        email={email} pass1={pass1} pass2={pass2} handleChange={handleChange} createAccount={createAccount}
        lemail={lemail} lphone={lphone} accountLogin={accountLogin}/>
        </>
    )
}

export default MenuBar;