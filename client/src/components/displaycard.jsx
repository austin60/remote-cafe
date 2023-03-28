import { useState } from "react";
import FoodDetail from "./foodDetail";

const DisplayCard=()=>{
    const [img,setImg]=useState(true);
    const [fopen, setFOpen] = useState(false);

    const onFOpenModal = () => setFOpen(true);
    const onFCloseModal = () => setFOpen(false);

return(
    <>
    <div className="display-card">
        <div className="image-display">
              <img src={img?"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.1380248698.1679665908&semt=ais":
              "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&ga=GA1.2.1380248698.1679665908&semt=ais"} alt="" 
               onMouseOver={()=>setImg(false)}
               onMouseOut={()=>setImg(true)}/>
        </div>
        <div className="info-display">
            <span className="food-title">Grilled chicken</span>
            <span className="food-cost">Ksh 450</span>
            <button onClick={onFOpenModal}>go to order</button>
        </div>

    </div>
    {
        fopen &&  <FoodDetail onFCloseModal={onFCloseModal} fopen={fopen}/>
    }
    </>
)
}
export default DisplayCard;