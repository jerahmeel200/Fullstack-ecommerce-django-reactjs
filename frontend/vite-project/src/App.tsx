import { Route, Routes } from "react-router-dom"
 
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SignUp from "./pages/SignUp"

 

const App = () => {
  return (
    <>
         <Header/>
     <Routes>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<SignUp/>}/>
<Route path="/" element={<Homepage/>}/>
 
     </Routes>
      <Footer/> 
     </>
   
     

  
      
   
  )
}

export default App