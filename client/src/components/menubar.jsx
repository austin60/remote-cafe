import { MdRestaurantMenu,MdOutlineFastfood,MdArrowDropDown,MdOutlineFreeBreakfast,MdOutlineLunchDining,MdOutlineLogin,
    MdOutlineDinnerDining,MdOutlineShoppingBasket,MdArrowDropUp,MdOutlineContactSupport,MdPersonOutline,MdLogout } from "react-icons/md";

const MenuBar=()=>{
   const showDisplay=(idname)=>{
    let x=document.getElementById(idname)
    x.style.display="block"
   }
   const hideDisplay=(idname)=>{
    let x=document.getElementById(idname)
    x.style.display="none"
   }

    return(
        <div className="menubar">
            <div className="icon">
                <span>RC</span>
            </div>
            <div className="menu-items">
                <ul>
                    <li>Menu <MdRestaurantMenu className="menu-icon"/></li>
                    <li>My Order<MdOutlineShoppingBasket className="menu-icon"/></li>
                    <li onMouseEnter={()=>showDisplay("category")} onMouseLeave={()=>hideDisplay("category")}>
                        Category <MdArrowDropDown className="menu-icon"/>
                        <ul className="dropdown" id="category">
                             <li>Breakfast<MdOutlineFreeBreakfast className="menu-icon"/></li>
                             <li>Lunch<MdOutlineLunchDining className="menu-icon"/></li>
                             <li>Dinner<MdOutlineDinnerDining className="menu-icon"/></li>
                             <li>Snacks<MdOutlineFastfood className="menu-icon"/></li>
                        </ul>
                    </li>
                    <li onMouseEnter={()=>showDisplay("price")} onMouseLeave={()=>hideDisplay("price")}>
                        Price <MdArrowDropDown className="menu-icon"/>
                         <ul className="dropdown" id="price">
                             <li>Lowest<MdArrowDropDown className="menu-icon"/></li>
                             <li>Highest<MdArrowDropUp className="menu-icon"/></li>
                         </ul>
                    </li>
                    <li>Contact Us<MdOutlineContactSupport className="menu-icon"/></li>
                    <li onMouseEnter={()=>showDisplay("account")}  onMouseLeave={()=>hideDisplay("account")}>
                        Account<MdArrowDropDown className="menu-icon"/>
                         <ul className="dropdown" id="account">
                             <li>LogIn<MdOutlineLogin className="menu-icon"/></li>
                             <li>LogOut<MdLogout className="menu-icon"/></li>
                             <li>Profile<MdPersonOutline className="menu-icon" /></li>
                         </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar;