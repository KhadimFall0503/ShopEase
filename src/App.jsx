import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Futures from "./components/Futures"
import About from "./components/About"
import "../src/styles/style.css"
function App() {

  return (
    <div>
      <Navbar/>
      <Products/>
      <Futures/>
      <About/>
    </div>
  )
}

export default App
