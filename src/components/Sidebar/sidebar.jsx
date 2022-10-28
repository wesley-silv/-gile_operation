import './sidebar.sass'
import React from 'react'

// Essa forma genérica vai importar todos os icones da biblioteca react-icons. 
import * as FaBars from 'react-icons/all'

// impotação comum usada em vários projetos com uso do react, o react conhece um nova impotação e logo a adiciona a biblioteca.
import { BiMenuAltLeft } from "react-icons";

// importando o link do react-router-dom
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <Link to="#" className='menu-bars'>
          <FaBars size={50} color='gray' />
        </Link>
        <BiMenuAltLeft size={50} color='Gray'/>
      </div>
    </>
  )
}

export default Sidebar