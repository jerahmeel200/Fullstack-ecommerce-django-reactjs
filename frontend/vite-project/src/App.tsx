import { Route, Routes } from "react-router-dom"
 
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SignUp from "./pages/SignUp"
import CartPage from "./pages/CartPage"

 

const App = () => {
  return (
    <>
         <Header/>
     <Routes>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<SignUp/>}/>
<Route path="/" element={<Homepage/>}/>
<Route path="/cart" element={<CartPage/>}/>
 
     </Routes>
      <Footer/> 
     </>
   
     

  
      
   
  )
}

export default App