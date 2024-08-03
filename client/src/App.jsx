import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./Components/Header"
import PrivateRoutes from "./Components/PrivateRoutes"
import CreateListing from "./pages/CreateListing"

export default function App() {
  return (
    <BrowserRouter>
    <Header/> 
    <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/signin" element={<SignIn/>}> </Route>
        <Route path="/signup" element={<SignUp/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route element={<PrivateRoutes/>}>
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/create-listing" element={<CreateListing/>}/>  
        </Route>
    </Routes>
    </BrowserRouter>
  )
  
}
