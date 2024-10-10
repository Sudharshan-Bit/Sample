import axios from "axios";
import apiurl from "../apinendpoint/apiendpoint";

export const getallproducts=async()=>{
    const res= await axios.get(`${apiurl()}/products`)
    return res.data
}