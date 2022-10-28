// Styles
import './header.sass';

// Icons
import { CgMenuLeftAlt } from 'react-icons/all'

const Header = () => {
  const Imagens = { 
    logo: './imagens/mccain.svg',
  }  

  return (
    <div className='header'>
      <a href='#' alt='logo inicial da página' >
        <img src={Imagens.logo} alt='McCain' />
      </a>
      <CgMenuLeftAlt size={50} color='gray' className='menu'/>
    </div>
  )
}

export default Header