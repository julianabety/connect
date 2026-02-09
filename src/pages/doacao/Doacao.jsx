import Card from "../../components/cards/Card";
import cest from '../../assets/images/cestabasica.jpg';
import livro from '../../assets/images/livro.jpg';
import computador from '../../assets/images/computador.jpg';
import s from './Doacao.module.scss';


export default function Doacao() {
  return (
    <main className={s.doacao}>
      <h1>Doação</h1>

      <section>
        <article>
          <Card 
          img={cest}
          alt="Imagem de uma cesta básica"
          titulo="Instituto grande familia"
          subtitulo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          botao="Quero doar"
          />
        </article>

        <article>
          <Card 
          img={livro}
          alt="Imagem de livros"
          titulo="Projeto Futuro na Escola"
          subtitulo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.."
          botao="Quero doar"
          />
        </article>

        <article>
          <Card 
          img={computador}
          alt="Imagem de um computador"
          titulo="Instituto Conecta Jovem"
          subtitulo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
          botao="Quero doar"
          />
        </article>
      </section>

    </main>
  )
}
