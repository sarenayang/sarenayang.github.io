import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Funfacts from './components/MoreInfo/MoreInfo'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <About />

      <hr></hr>

      <Funfacts />

      <Footer></Footer>
    </>
  )
}

export default App
