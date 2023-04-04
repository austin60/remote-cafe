import MenuBar from "./menubar";
import MainFooter from "./mainfooter";

const ContactPage=(props)=>{

    const{ handleChange,createAccount,custname,phone,email,pass1,pass2,lemail,lphone,accountLogin}=props
    return(
        <div className="page">
            <MenuBar handleChange={handleChange} createAccount={createAccount} custname={custname} phone={phone} 
            email={email} pass1={pass1} pass2={pass2} lemail={lemail} lphone={lphone} accountLogin={accountLogin}/>
            <div className="contact-section">
                <div className="contact-image">
                    <img src="https://www.signpost.com/wp-content/uploads/2021/11/call-center-customer-service-tips-scaled.jpeg" alt="" />
                </div>
                <div className="contact-form">
                    <div className="contact-inputs">
                       <input type="text" placeholder="enter first name"/>
                       <input type="text" placeholder="enter second name"/>
                       <input type="text" placeholder="enter email"/>
                       <input type="text" placeholder="enter phone number"/>
                    </div>
                    <div className="contact-message">
                        <textarea></textarea>
                       <button className="btn">Send Message</button>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}
export default ContactPage;