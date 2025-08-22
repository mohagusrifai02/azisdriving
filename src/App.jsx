import Home from "./components/home"
import Navbar from "./components/navbar"
import Testimoni from "./components/testimoni"
import Keunggulan from "./components/keunggulan"
import Layanan from "./components/layanan"
import Kontak from "./components/kontak"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/layanan" element={<Layanan/>}/>
            <Route path="/keunggulan" element={<Keunggulan/>}/>
            <Route path="/testimoni" element={<Testimoni/>}/>
            <Route path="/kontak" element={<Kontak/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
