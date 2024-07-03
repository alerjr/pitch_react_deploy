// Rotas
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// CSS
import './App.css'

// Componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Paginas
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Reviews from './pages/Reviews/Reviews'
import About from './pages/About/About'

function App() {

  return (
    <BrowserRouter>
      <div>
      <Navbar />
      </div>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <div className='cabecalho'>
        <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App
