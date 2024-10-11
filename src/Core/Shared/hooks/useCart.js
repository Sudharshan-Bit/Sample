import { create } from "zustand";
const useCart=create((set)=>({
    // count:0,
    // inc:()=>set((state)=>({count:state.count+1})),
    // dec:()=>set((state)=>({count:Math.max(state.count-1,0)}))


    count:parseInt(localStorage.getItem('Cartcount'))|| 0,


    inc:()=>set((state)=>{
        var countstate=state.count+1;
        localStorage.setItem('Cartcount',state.count)
        return {count:countstate}}),
    
    dec:()=>set((state)=>{
        var countstate=state.count-1;
        localStorage.setItem('Cartcount',state.count) 
        return {count:countstate}})
}))
export default UseCart;
