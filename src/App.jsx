import Busca from "./components/Busca.jsx";
import ClimaAtual from "./components/ClimaAtual.jsx";
import Previsao from "./components/Previsao.jsx";
import {Titulo} from "./AppStyles.js";
import {useState} from "react";


function App() {
    const [cidade, setCidade] = useState("")
    const [clima, setClima] = useState(null)
    const [previsao, setPrevisao] = useState([])


  return (
    <>
      <Titulo>Condiçoes Climaticas</Titulo>
      <Busca/>
      <ClimaAtual/>
      <Previsao/>
    </>
  )
}

export default App
