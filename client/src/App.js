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
    pass1:'',
    pass2:'',
    
    //cust log
    lemail:'',
    lphone:'',
    client:[],
    pphone:sessionStorage.getItem('userphone')||'',
    //amount:sessionStorage.getItem('amount')||'',
    amount:1,
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
accountLogin=()=>{
  const{lphone,lemail}=this.state

  if(lphone!=='' && lemail !==''){
    const client={
      phone:lphone,
      email:lemail
    }
    axios.post("http://localhost:5000/remotecafe/client",client)
    .then(res=>this.setState({client:res.data},()=>{
      sessionStorage.setItem('userphone',JSON.stringify(this.state.client[0].phone));
    }))
    .catch(err=>console.log(err))  }
 else{
  const element=document.getElementById('err');
  element.innerHTML="fill all fields"
 }

}
createAccount=()=>{
  const{ custname,phone,email,pass1,pass2}=this.state;
  const numbers=/[\d]/g;
  const letters=/[\D]/gi;
  const validEmail=/[a-zA-Z0-9_\-.]+[@][a-z]+[.][a-z]{2,3}/g;
  const validPass=/[A-Z0-9]/g;

  const element=document.getElementById('error');
  if(custname===""||phone===""||email===""||pass1===""){
    element.innerHTML='*fill all fields'
  }
  else if(numbers.test(custname)){
    element.innerHTML='*avoid numbers in name field'
  }
  else if(letters.test(phone)||phone.length<10){
    element.innerHTML='*enter valid mobile number'
  }
  else if(!validEmail.test(email)){
    element.innerHTML='*enter valid email'
  }
  else if(pass1.length<8){
    element.innerHTML='*password set to a minimum of 8 characters'
  }
  else if(pass2!==pass1){
    element.innerHTML='*password mismatch'
  }
  else if(!validPass.test(pass2)){
    element.innerHTML='*password should have atleast one capital letter and number'
  }
  else{
    const newCust={
      name:custname,
      phone:phone,
      email:email,
      pass:pass2
    }
    axios.post("http://localhost:5000/remotecafe/signup",newCust)
    console.log(newCust)
  } 
    
 }

makeOrder=()=>{
  const{ pphone,amount}=this.state
  const payment={
    phone:pphone,
    amount:amount
  }
   axios.post("http://localhost:5000/token",payment)
    
 }

  componentDidMount(){
    axios.get("http://localhost:5000/remotecafe/")
    .then(res=>{
      this.setState({data:res.data});
    })
    .catch(err=>console.log(err))

  }
  render(){
    const{foodname,price,desc,type,img1,img2,data,orders,custname,phone,email,pass1,pass2,lphone,lemail}=this.state;
  return (
   
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<DisplayPage data={data} addToOrder={this.addToOrder} handleChange={this.handleChange}
              custname={custname} phone={phone} email={email} pass1={pass1} pass2={pass2} createAccount={this.createAccount}
              lphone={lphone} lemail={lemail} accountLogin={this.accountLogin}/>}/>
          <Route path='/contact' element={<ContactPage handleChange={this.handleChange} createAccount={this.createAccount} 
                    custname={custname} phone={phone} email={email} pass1={pass1} pass2={pass2} lphone={lphone} lemail={lemail}
                    accountLogin={this.accountLogin}/>}/>
          <Route path='/orders' element={<OdersPage  orders={orders} addToOrder={this.addToOrder} reduceOrder={this.reduceOrder}
                                removeFromOrder={this.removeFromOrder} accountLogin={this.accountLogin} handleChange={this.handleChange} makeOrder={this.makeOrder}/>}/>
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
