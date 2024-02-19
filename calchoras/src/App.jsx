import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [hi, setHi] = useState();
const [mi, setMi] = useState();
const [hf, setHf] = useState();
const [mf, setMf] = useState();
const [resultado, setResultado] = useState("Resultado");

const soma = () => {
  let somaHora = Number(hi.value) + Number(hf.value);
  let somaMin = Number(mi.value) + Number(mf.value);
  while (somaMin > 59){
    somaMin -= 60;
    somaHora ++;

  }
  setResultado.somaHora + ":" + somaMin;
}
  const sub= () => {
    let momentoInicial = hi.value*60 + Number(mi.value);
  let momentoFinal = hf.value*60 + Number(mf.value);
  let resultadoHora = 0;
  let resultadoMinuto = momentoInicial - momentoFinal;
  if(resultadoMinuto < 0){
    resultadoMinuto -=60;
    resultadoHora ++;
}
setResultado.innerHTML = resultadoHora+":"+resultadoMinuto;
    }
  return (
    <>
     <h1>Calculadora de Horas</h1>
    <div class="samba">
    <h3>Digite os horário o que deseja calcular!</h3>
    <input 
    type="number" 
    value={hi}
    onChange={(e) => setHi(e.target.value)}
    placeholder="Hora Inicial"
    /> &nbsp; : &nbsp; 
    <input 
    type="number"
    value={mi}
    onChange={(e) => setHi(e.target.value)}
    placeholder="Minuto Inicial"
    /> &nbsp;  
     <input 
    type="number"
    value={hf}
    onChange={(e) => setHi(e.target.value)}
    placeholder="Hora Final"
    /> &nbsp; : &nbsp; 
     <input 
    type="number"
    value={mf}
    onChange={(e) => setHi(e.target.value)}
    placeholder="Minuto Final"
    /> <br /><br />
    <button onclick="soma()"> Soma </button>
    <button onclick="Sub()"> Diferença </button>
    <h3 id="resultado">{resultado}</h3>
    </div>
    </>
  )
  }

export default App
