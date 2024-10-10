import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "../components/Home"
import Blogs from "../Core/Blog/Blogs"
import Main from "../Core/Main/Main"
import Product from "../Core/product/Product"


export default function Approuter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>
        <Route path="" element={<Home/>}/>
        <Route path="menu2" element={<Product/>}/>
        <Route path="Blog" element={<Blogs/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>

  )
}
