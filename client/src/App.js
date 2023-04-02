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
    data:[],
    orders:localStorage.getItem("orders")?JSON.parse(localStorage.getItem("orders")):[],
    //food model
    foodname:'',
    price:'',
    desc:'',
    type:'',
    img1:'',
    img2:'',
    images:[],

    //cust model
    custname:'',
    phone:'',
    email:'',
    pass:'',

    //fooditem
    food:'',
    quantity:1,
    cost:0
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
    const{ foodname,price,desc/*,type*/,img1,img2}=this.state
    const FoodItem={
      foodname:foodname,
      price:price,
      desc: desc,
      img1: img1,
      img2:img2,
    }
    console.log(FoodItem)
    axios.post("http://localhost:5000/remotecafe/post",FoodItem);
  }

 addToOrder=(product)=>{
   const orders=this.state.orders.slice();
   let alreadyInCart=false;

   orders.forEach(order => {
     if(order._id===product._id){
        order.count++;
        alreadyInCart=true;
        console.log("count added")
     }
   });

   if(!alreadyInCart){
     orders.push({...product,count:1});
   }
   this.setState({orders},()=>localStorage.setItem('orders', JSON.stringify(this.state.orders)));
 }
 reduceOrder=(product)=>{
  const orders=this.state.orders.slice();

  orders.forEach(order=>{
    if(order._id===product._id){
      if( order.count>1){
        order.count--
      };
    }})
    this.setState({orders},()=>localStorage.setItem('orders', JSON.stringify(this.state.orders)));
 }
 removeFromOrder=(product)=>{
  const orders=this.state.orders.slice();
  const neworders=orders.filter(x=>x._id!==product._id);
  this.setState({orders:neworders},()=>localStorage.setItem('orders', JSON.stringify(neworders)))
 }


  componentDidMount(){
    axios.get("http://localhost:5000/remotecafe/")
    .then(res=>{
      this.setState({data:res.data});
    })
    .catch(err=>console.log(err))

   
    //console.log(this.state.orders)
  }
  render(){
    const{foodname,price,desc,type,img1,img2,data,quantity,orders /*,custname,phone,email,pass,food, cost*/}=this.state;
  return (
   
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<DisplayPage data={data}  quantity={quantity} addToOrder={this.addToOrder}/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/orders' element={<OdersPage  orders={orders} addToOrder={this.addToOrder} reduceOrder={this.reduceOrder}
                                removeFromOrder={this.removeFromOrder}/>}/>
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
