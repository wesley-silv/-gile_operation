// Styles
import './header.sass';

// Icons

const Header = () => {
  const Imagens = { 
    logo: './imagens/mccain.svg',
  }  

  return (
    <div className='header'>
      <a href='../index.html' target="black" title='Início' alt='logo inicial da página' className='header-img'>
        <img src={Imagens.logo} alt='McCain' />
        + tpm
      </a>
      <ul className='header-list'>
        <li><a href="">Ishida</a></li>
        <li><a href="">Hysen</a></li>
        <li><a href="">Detector</a></li>
        <li><a href="">Balança</a></li>
        <li><a href="">Encaixotadora</a></li>
        <li><a href="">Seladora</a></li>
        <li><a href="">Armadora</a></li>
        <li><a href="">Robô</a></li>
      </ul>
    </div>
  )
}

export default Header