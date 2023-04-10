import { useState,useEffect } from "react";
import FoodDetail from "./foodDetail";
import { fetchData } from "../redux/actions/productActions";
import { connect} from "react-redux";




const DisplayCard=(props)=>{
   useEffect(()=>fetchData(),[])

    const {data,addToOrder}=props

    const [img,setImg]=useState(null);
    const [fopen, setFOpen] = useState(false);

    const onFOpenModal = (data) => setFOpen(data);
    const onFCloseModal = () => setFOpen(false);

return(
    <>
  { data.map(dataitem=>( <div key={dataitem._id} className="display-card">
        <div className="image-display">
              <img src={img?dataitem.img1:dataitem.img2} alt=""  onMouseOver={()=>setImg(false)} onMouseOut={()=>setImg(true)}/>
        </div>
        <div className="info-display">
            <span className="food-title">{dataitem.foodname}</span>
            <span className="food-cost">Ksh {dataitem.price}</span>
            <button onClick={()=>onFOpenModal(dataitem)}>view details</button>
        </div>

    </div>
))}
    {
        fopen &&  <FoodDetail onFCloseModal={onFCloseModal} fopen={fopen} addToOrder={addToOrder} />
    }
    </>
)
}

const mapStateToProps=state=>{
    return{
        data:state.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
      fetchProducts:dispatch(fetchData())
      
    }
  }
export default connect(mapStateToProps ,mapDispatchToProps) (DisplayCard);