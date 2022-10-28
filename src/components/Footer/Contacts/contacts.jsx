import './contacts.sass'

import React from 'react'
import {BsGithub, BsWhatsapp} from 'react-icons/all'

function Contacts() {
  return (
    <div className='social_media'>
      <a href='https://wa.me/5534992540828?text= Olá Wesley, desejo obter suporte desta aplicação ' alt='link for whatsapp' target='blank'>
      <BsWhatsapp size={30} color='lime'/>
      </a>
      <a href='https://github.com/wesley-silv' alt='link for github' target='blank' >
      <BsGithub size={30} color='lime'/>
      </a>
    </div>
  )
}

export default Contacts
