import { useState } from "react";
import AdminBar from "./admin";
import ReactImageFileToBase64 from "react-file-image-to-base64";

const AddFoodPage=()=>{
    const [images, setImages] = useState([]);
    const [img1, setImg1] = useState('');

    const handleOnCompleted = files => {
        setImages(files);
        images.length<1?console.log("no file chosen"): setImg1(images[0].base64_file)
        console.log(img1)
 
      };
   
      const [images2, setImages2] = useState([]);
      const [img2, setImg2] = useState('');

      const handleOnCompleted2 = files => {
          setImages2(files);
          images.length<1?console.log("no file chosen"): setImg2(images2[0].base64_file);
          console.log(img2);
   
        };
return(
    <div className="page">
     <AdminBar/>
     <h2 className="admin-heading">Create new dish</h2>
     <div className="admin-food-page">
        <div className="admin-food-images">
          <div className="admin-img1 adminimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhERHfLPJivEihBofpV7srogqfhq2SFMFgWA&usqp=CAU" alt="" />
          </div>
          <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted} />
          <div className="admin-img2 adminimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhERHfLPJivEihBofpV7srogqfhq2SFMFgWA&usqp=CAU" alt="" />
          </div>
          <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted2} />
        </div>
     
        <div className="admin-food-detail">
            <div className="food-name">
                <input type="text" placeholder="set food name" className="admin-input"/>
            </div>
          <div className="admin-food-desc">
            <textarea placeholder="briefly describe the dish"></textarea>
          </div>
          <div className="admin-food-cost">
            <input type="text" placeholder="set the price" className="admin-input"/>
          </div>
          <button className="admin-input">Add Food Item</button>
        </div>
    </div>
   </div>
)
}
export default AddFoodPage;