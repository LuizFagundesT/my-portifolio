import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Contato from "./pages/Contato/Contato"
import Habilidades from "./pages/Habilidades/Habilidades"
import Sobre from "./pages/Sobre/Sobre"
import Projetos from "./pages/Projetos/Projetos"
import SpotifyPlayer from './components/SpotifyPlayer'
import MainLayout from "./Layout/MainLayout"
// import stylesHome from "./pages/HomePage/Home.module.css"

function App() {
  

  return (
    <Router>
      <Routes>
        {/* <div className={stylesHome.spotifyWrapper}>
                <SpotifyPlayer linkMusica={"https://open.spotify.com/embed/track/3GCdLUSnKSMJhs4Tj6CV3s?utm_source=generator"}/>
              </div> */}
        <Route path="/" element = {<MainLayout/>}>
          <Route index element ={<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/contato" element = {<Contato/>}/>
          <Route path="/sobre" element = {<Sobre/>}/>
          <Route path="/habilidades" element = {<Habilidades/>}/>
          <Route path="/projetos" element = {<Projetos/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
