import AdminBar from "./admin";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import { connect } from "react-redux";
import { newFoodItem } from "../redux/actions/axiospostActions";

const AddFoodPage=(props)=>{

const{ handleOnCompleted,handleChange,foodname,price,desc,img1,img2,/*newFoodItem*/}=props  

return(

    <div className="page">
     <AdminBar/>
     <h2 className="admin-heading">Create new dish</h2>
     <div className="admin-food-page">
        <div className="admin-food-images">
          <div className="admin-img1 adminimg">
            <img src={img1} alt="" />
          </div>
          <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted("img1")} />
          <div className="admin-img2 adminimg">
            <img src={img2} alt="" />
          </div>
          <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted("img2")} />
        </div>
     
        <div className="admin-food-detail">
            <div className="food-name">
                <input type="text" placeholder="set food name" className="admin-input" value={foodname} onChange={handleChange("foodname")}/>
            </div>
          <div className="admin-food-desc">
            <textarea placeholder="briefly describe the dish" value={desc} onChange={handleChange("desc")}></textarea>
          </div>
          <div className="admin-food-cost">
            <input type="text" placeholder="set the price" className="admin-input" value={price} onChange={handleChange("price")}/>
          </div>
          <button className="admin-input" onClick={newFoodItem(foodname,price,desc,img1,img2)}>Add Food Item</button>
        </div>
    </div>
   </div>
)
}

const mapDispatchToProps=dispatch=>{
  return{
    newFoodItem:(foodname,price,desc,img1,img2)=>dispatch(newFoodItem(foodname,price,desc,img1,img2))
  }
}
export default connect(null,mapDispatchToProps) (AddFoodPage);