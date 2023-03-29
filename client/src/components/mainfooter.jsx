import { FaTwitter,FaFacebookF,FaWhatsapp,FaPinterest,FaArrowRight } from "react-icons/fa";
import { MdMailOutline,MdOutlineCopyright} from "react-icons/md";
import { NavLink } from "react-router-dom";

const MainFooter=()=>{
return(
    <div className="main-footer">
        <div className="footer-info">
            <div className="company-stament">
                <h2>RC</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum quis magnam nesciunt,
                   labore velit animi asperiores, alias consequatur maxime impedit totam? Vel architecto veniam 
                   modi nihil assumenda veritatis facere.</p>
            </div>
            <div className="location">
                <h4>Location</h4>
                <span>Moi Drive</span>
                <span>Umoja,Nairobi</span>
                <span>remotecafe,0200</span>
                <span className="location-email">okongoaustine@gmail.com</span>
                <p>0703303223</p>
            </div>
            <div className="links">
                <h4>Links</h4>
                <span>Home</span>
                <span>Careers</span>
                <span>About Us</span>
                <span><NavLink to="/admin/create"> Admin</NavLink></span>
                <span>Contacts</span>
            </div>
            <div className="newsletter">
            <h4>Newsletter</h4>
                <div className="newslett">
                    <MdMailOutline/>
                    <input type="text" placeholder="Enter your email id" />
                    <div><FaArrowRight/></div>
                </div>
                <div className="socials">
                    <div className="social"><FaFacebookF className="social-icon"/></div>
                    <div className="social"><FaTwitter className="social-icon"/></div>
                    <div className="social"><FaWhatsapp className="social-icon"/></div>
                    <div className="social"><FaPinterest className="social-icon"/></div>
                </div>
            </div>
        </div>
        <div className="allrights">
            Remoter cafe <MdOutlineCopyright/> all rights reserved
        </div>
    </div>
)
}
export default MainFooter;