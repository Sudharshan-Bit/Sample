import { useEffect, useState } from "react"
import { getallproducts } from "../Shared/Services/Products/apiproducts";
import Productcards from "../Shared/Components/cards/productcards";
import useCart from "../Shared/hooks/useCart";


export default function Product() {
    const [products,setproducts]=useState([]);
    const{inc,dec}=useCart();
    const getProducts=async ()=>{
        const res= await getallproducts()
        setproducts(res.products)

    }
    useEffect(()=>{
        getProducts();

    },[])
    console.log("datas",products)
  return (
    <div>
    <Productcards products={products} inc={inc} dec={dec}/>
    </div>
  )
}
 