import DisplayCard from "./displaycard";
import MenuBar from "./menubar";
import PageFooter from "./pagefooter";

const DisplayPage=()=>{
   return(
    <div className="page">
        <MenuBar/>
        <div className="display-page">
        <DisplayCard/>
        </div>
        <PageFooter/>
    </div>
   ) 
}

export default DisplayPage;