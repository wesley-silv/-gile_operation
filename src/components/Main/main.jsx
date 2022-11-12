import './main.sass'

import React from 'react'

function Main () {
  return (
    <>
    <div className='main'>
      <img src="../imagens/Manutenção.jpg.jpg" alt="Imagem de um homem tocando engrenagens fluetuantes " />
      <div className='main-title'>
      <h2>
        Afinal para que serve o TPM?
      </h2>
      <p>
      A TPM (Manutenção produtiva total) é uma filosofia gerencial para aumentar a produtividade de um processo produtivo ao reduzir perdas, paradas e falhas integrando os setores de manutenção e operação.
      </p>
      </div>
    </div>
    <div className='video'> 
    <h2>
      Assista o vídeo para saber mais
    </h2>
    <iframe className='iframe' src="https://www.youtube.com/embed/29NRtD0RAKM" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
    </div>
    </>
    
  )
}

export default Main 
