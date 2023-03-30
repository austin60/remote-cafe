import DisplayCard from "./displaycard";
import MenuBar from "./menubar";
import PageFooter from "./pagefooter";

const DisplayPage=(props)=>{
    const {data,quantity}=props
   return(
    <div className="page">
        <MenuBar/>
        <div className="display-page">
        <DisplayCard data={data} quantity={quantity}/>
        </div>
        <PageFooter/>
    </div>
   ) 
}

export default DisplayPage;