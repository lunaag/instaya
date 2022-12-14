import { useState } from 'react'
import './App.css'
import Login from './components/formularios/login'
import Registro from './components/formularios/register'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/navbar'
import EstadoOrdenes from './components/formularios/estado'
import Solicitar from './components/formularios/solicitar-registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
      
       <Navbar/>
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path= "/estado" element={<EstadoOrdenes/>}/>
        <Route path= "/login/solicitar" element ={<Solicitar/>}/>
        <Route path="solicitar-registro" element={<Solicitar/>}/>
       </Routes>
      </div>
    </BrowserRouter>
      
    
  )
}

export default App;