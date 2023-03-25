import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doctor from "./components/doctor/Doctor";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import InformationForm from "./components/InformationForm";
import Googlelogin from "./components/registration/googlelogin/Googlelogin";
import Login from "./components/registration/login/Login";
import Signup from "./components/registration/signup/Signup";
import Shop from "./components/shop/Shop";
import Successfull from "./components/Successfull";
import Vaccine from "./components/vaccine/Vaccine";
import VaccineCart from "./components/vaccine/VaccineCart";
import { auth } from "./firebase";
import Home from "./pages/Home";
function App() {
  const [userName,setUserName]=useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }else setUserName(""); 
    });
  },[])
  return (
      <>
        <Header name={userName}></Header>
        <Router>
              <Routes>
                <Route path="/signup" element={ <Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/googlesignup" element={<Googlelogin/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/doctor" element={<Doctor/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/vaccine" element={<Vaccine/>}/>
                <Route path="/vaccinecart" element={<VaccineCart/>}/>
                <Route path="/informationform" element={<InformationForm/>}/>
                <Route path="/successfull" element={<Successfull/>}/>
                
              </Routes>
          </Router> 
          <Footer></Footer>
      </>
  );
}

export default App;
