import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import s from "./usuario.module.scss";

export default function Usuario() {
  return (
    <main className={s.usuario}>
      <section>
        <img src="https://avatars.githubusercontent.com/u/187912049?v=4" alt="Foto de Perfil de Usuário"/>
        <div className={s.div}>
            <h1>Juliana Ferreira</h1>
            <h2>Voluntário Ativo</h2>
            <p>Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
            <ul>
              <li><CiLocationOn />Ipatinga, MG</li>
              <li><MdOutlineEmail />julianabety@hotmail.com</li>
              <li><CiCalendar />Membro desde Janeiro 2022</li>
            </ul>
            <ul>
              <li>Educação</li>
              <li>Meio Ambiente</li>
              <li>Assistência Social</li>
              <li>Design</li>
            </ul>
        </div>
      </section>
    </main>

  );
}
