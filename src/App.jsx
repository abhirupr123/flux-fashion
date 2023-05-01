import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Previewbest from "./components/Previewbest";
import Previewnew from "./components/Previewnew";
import Cart from "./components/Cart";
import Success from "./components/Success";
import Account from "./components/Account";
import Details from "./components/Details";

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/product/bestsellers/:id" element={<Previewbest/>}/>
    <Route path="/product/newarrivals/:id" element={<Previewnew/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/myaccount" element={<Account/>}/>
    <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App;
