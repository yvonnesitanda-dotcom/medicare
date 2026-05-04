import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Addproducts from './components/Addproducts';
import Navbar from "./components/Navbar";
import SpeakToDoctor from './components/Speaktoadr';
import Myhealthcenter from './components/Myhealthcenter';
import Footer from "./components/Footer";
import Account from './components/Account';
import Chatbox from './components/Chatbox';
import HealthDashboard from './components/Healthdashboard';
import Cart from './components/Cart';
import Aboutus from './components/Aboutus';

function App() {
  
  return (
    
  <Router>
    <Navbar />
    
      <div className="App">
        <header className="App-header">
        <h5>Welcome to MEDIcare- Your health is our priority</h5>
      </header>
      
       
       
      <Routes>
        <Route path='/' element={<Getproducts/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path= '/signin' element={<Signin/>} />
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/speaktoadr'element={<SpeakToDoctor/>}/>
        <Route path='/myhealthcenter' element={<Myhealthcenter/>}/>
        <Route path='/account' element ={<Account/>}/>
        <Route path='/chatbox' element={<Chatbox/>}/>
        <Route path='/healthdashboard' element={<HealthDashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
              </Routes>

    
    
    </div>
    <Footer />
    
  </Router>

   
  );
}

export default App;
