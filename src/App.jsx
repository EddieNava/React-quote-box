import { useState } from 'react'
import frases from './json/frases.json' 
import QuoteBox from '../components/QuoteBox'
import './App.css'





const arrayColors =  [ 
  '#3F45B6', '#D038CA', '#29EBBB', '#40D89A',  
  '#468BE0', '#71E980', '#9233C8', '#2D0BFC', 
  '#1965ED', '#A704EB', '#F3C501', '#33E215'   
]

function App() {
 
  const createNumberRandom = array => {
    return Math.floor(Math.random () * array.length)
  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  //let indexFraseRandom = createNumberRandom(frases)
  //let indexColorRandom = createNumberRandom(arrayColors)

  const [fraseRandom, setFraseRandom] = useState(getElementRandom(frases))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors)) 
 
  const clickButton = () => {
    setFraseRandom(getElementRandom(frases))
    setColorRandom(getElementRandom(arrayColors))
  } 

  const appStyle = {
    backgroundColor: colorRandom,
    color: colorRandom
    
  }

  const styleButton = {
    backgroundColor: colorRandom,
        
  }

  return (
    <div style={appStyle} className="App">
      <QuoteBox 
      fraseRandom={fraseRandom}
      colorRandom={colorRandom}
      getElementRandom={getElementRandom}
      clickButton={clickButton}

      />
    </div>
  )
}

export default App
