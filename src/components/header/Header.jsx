import { Link } from 'react-router-dom';    
import Logo from '../../assets/images/logo.png';
import S from './header.module.scss';

export default function Header() {
  return (

    <>
    
    <header className={S.header}>
      <section>

        <Link to="/">
          <img  src={Logo} alt="Logo"/>
        </Link>

      </section>

      <nav>
          <ul>
            <Link to="/doacao">Doação</Link>
            <Link to="/voluntariado">Voluntariado</Link>
            <Link to="/mentoria">Mentoria</Link>
            <Link to="/eventos">Eventos</Link>
          </ul>
        </nav>
      
      <img src="https://avatars.githubusercontent.com/u/187912049?v=4" alt=""/>
    </header>

    <Link to="/usuario">Juliana Ferreira</Link>
    </>
  )
}
