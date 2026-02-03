import { Link } from 'react-router-dom';    
import Logo from '../../assets/images/logo.png';
import S from './header.module.scss';
import { useEffect, useState } from 'react';

export default function Header() {

 const [menuOpen, setMenuOpen] = useState(false);

 const [isMobile, setIsMobile] = useState (window.innerWidth <= 768);


 useEffect(() => {
  function menuMobile() {
    setIsMobile (window.innerWidth <= 768);
    if(window.innerWidth > 768) {
      setMenuOpen (false);
    }
  }

  window.addEventListener ('resize', menuMobile);

  return () => {
    window.removeEventListener ('resize', menuMobile);
  };


 }, []);

 
  return (
    <>
    
    <header className={S.header}>
      <section>

        <Link to="/">
          <img className={S.imgLogo}  src={Logo} alt="Logotipo"/>
        </Link>

      </section>

      {!isMobile && (

        <nav className={S.nav}>
          <Link to="/doacao">Doação</Link>
          <Link to="/voluntariado">Voluntariado</Link>
          <Link to="/mentoria">Mentoria</Link>
          <Link to="/eventos">Eventos</Link>
        </nav>

      )}
      
      
      <img className={S.imgUser} src="https://avatars.githubusercontent.com/u/187912049?v=4" alt="Imagem do usuário" 
      onClick={() => setMenuOpen (!menuOpen)}/>
    </header>

      <nav className={menuOpen ? S.navUser : S.closedNav} >
        <Link to="/usuario">Juliana Ferreira</Link>
        <Link>Meu Voluntariado</Link>
        <Link>Configurações de conta</Link>

        {isMobile && (
          <div className={S.md}>
            <Link to="/doacao" onClick={()=> setMenuOpen(false)}>Doação</Link>
            <Link to="/voluntariado" onClick={()=> setMenuOpen(false)}>Voluntariado</Link>
            <Link to="/mentoria" onClick={()=> setMenuOpen(false)}>Mentoria</Link>
            <Link to="/eventos" onClick={()=> setMenuOpen(false)}>Eventos</Link>
          </div>
            
        )}
        <Link>Sair</Link>
      </nav>

    
    </>
  )
}
