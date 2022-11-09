import './footer.sass'

import React from 'react'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import Contacts from './Contacts/contacts'

function Footer() {
  return (
    <div className='footer'>
      <AiFillCopyrightCircle size={25} color='gray'/>
      <p>
      Todos os direitos reservados
      </p>
      <Contacts />
    </div>
  )
}

export default Footer
