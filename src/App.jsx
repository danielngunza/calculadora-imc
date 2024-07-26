import { useState } from 'react'
import './App.css'

function App() {
 
  const[peso, setPeso] = useState("");
  const[altura, setAltura] = useState("");
  const [msg,  setMsg] = useState("");
  
  function calcular(){
    const alt = altura /100
    const imc = peso /(alt * alt)
    
    if(imc < 18.6){
      setMsg("Você está abaixo do peso, seu IMC é" +imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMsg("Peso ideal, seu IMC é" +imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMsg("Você está levemebte acima do peso, seu IMC é" +imc.toFixed(2))
    }else if(imc >= 34.9){
      setMsg("Cuidado! Obesidade, seu IMC é " +imc.toFixed(2))
    }
  }

  return (
  <div className='app'>
    <h1>Calculadora IMC</h1>
    <span>Vamos calcular o teu IMC</span>

    <div className='area-input'>

      <input type="text" 
      placeholder='Peso em (kg). Ex.: 98' 
      value={peso}
      onChange={(e) => setPeso(e.target.value)}
      />

      <input type="text" 
      placeholder='Altura em (cm). Ex.: 180'
      value={altura}
      onChange={(e) => setAltura(e.target.value)}
       />

    <button onClick={calcular}>Calcular</button>

    </div>
    <h2>{msg}</h2>
  </div>
      
  )
}

export default App
