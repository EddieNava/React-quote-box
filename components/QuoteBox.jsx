import React from 'react'

const QuoteBox = ({fraseRandom, colorRandom, clickButton}) => {

const styleButton = {
    backgroundColor: colorRandom,
    
  }

return (
    <article className='QuoteBox'>
       <p>"{fraseRandom.quote}"</p>
       <p><b>{fraseRandom.author}</b></p>
       <button 
         style={styleButton} className='Quote__btn' 
         onClick={clickButton}
         >&#62;
       </button>
    </article>
)
}

export default QuoteBox