import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Futures from "./components/Futures"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "../src/styles/style.css"
function App() {

  return (
    <div>
      <Navbar/>
      <Products/>
      <Futures/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
