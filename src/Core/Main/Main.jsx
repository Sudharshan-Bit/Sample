import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Main() {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>

  )
}
