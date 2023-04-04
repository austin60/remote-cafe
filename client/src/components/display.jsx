import DisplayCard from "./displaycard";
import MenuBar from "./menubar";
import PageFooter from "./pagefooter";

const DisplayPage=(props)=>{
    const {data,quantity,addToOrder,custname,phone,email,pass1,pass2,handleChange,createAccount,lphone,lemail,accountLogin}=props
   return(
    <div className="page">
        <MenuBar custname={custname} phone={phone} email={email} pass1={pass1} pass2={pass2} handleChange={handleChange}
         createAccount={createAccount} lphone={lphone} lemail={lemail} accountLogin={accountLogin}/>
        <div className="display-page">
        <DisplayCard data={data} quantity={quantity} addToOrder={addToOrder}/>
        </div>
        <PageFooter/>
    </div>
   ) 
}

export default DisplayPage;