import About from "./About"
import Contact from "./Contact"
import Head from "./Head"
import MainPortfolio from "./MainPortfolio"
import Portfolio from "./Portfolio"
import { Route, Routes } from "react-router-dom"
const App = () =>{


    return(
        <div>
            <Head />

        <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<MainPortfolio/>} />
        </Routes>
        </div>
    )
}
export default App