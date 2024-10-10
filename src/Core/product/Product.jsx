import { useEffect, useState } from "react"
import { getallproducts } from "../Shared/Services/Products/apiproducts";
import Productcards from "../Shared/Components/cards/productcards";


export default function Product() {
    const [products,setproducts]=useState([]);
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
    <Productcards products={products}/>
    </div>
  )
}
