import { Component } from 'react';
import './App.css';
import DisplayPage from './components/display';
import ContactPage from './components/conntactPage';
import OdersPage from './components/ordersPage';
import AddFoodPage from './components/addFoodPage';
import { BrowserRouter as Router,Routes,  Route} from 'react-router-dom';
import axios from 'axios'


class App extends Component{
  state={
    //food model
    foodname:'',
    price:'',
    desc:'',
    type:'',
    img1:'',
    img2:'',
    images:[]

    /*/cust model
    custname:'',
    phone:'',
    email:'',
    pass:'',

    //fooditem
    food:'',
    quantity:1,
    cost:0*/
  }


  //set image
   handleOnCompleted =input=> files => {
    const{images,img1,img2}=this.state
    this.setState({images:files});
    images.length<1?console.log("no file chosen"): this.setState({[input]:images[0].base64_file})
    console.log(img1,img2)
  };

  //handle change
  handleChange=input=>e=>{
    this.setState({[input]:e.target.value})
  }
  //post new food data
  newFoodItem=()=>{
    const{ foodname,price,desc,type,img1,img2}=this.state
    const FoodItem={
      foodname:foodname,
      price:price,
      desc: desc,
      img1: img1,
      img2:img2,
    }
    console.log(FoodItem)
    //axios.post("/post",FoodItem)
  }
  render(){
    const{foodname,price,desc,type,img1,img2 /*,custname,phone,email,pass,food,quantity, cost*/}=this.state;
  return (
   
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<DisplayPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/orders' element={<OdersPage />}/>
          <Route path='/admin/create' element={<AddFoodPage foodname={foodname} price={price} desc={desc} type={type} 
                  img1={img1} img2={img2} handleOnCompleted={this.handleOnCompleted} handleChange={this.handleChange}
                  newFoodItem={this.newFoodItem}/>}/>
       </Routes>
      </Router>
    </div>
  );
}
}

export default App;
