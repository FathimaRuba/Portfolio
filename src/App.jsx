import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import './bootstrap.min.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
