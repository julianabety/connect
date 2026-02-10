import Card from "../../components/cards/Card";
import s from '../../../src/styles.module.scss';
import acompanhe from '../../assets/images/acompanhe.png';
import mentoria from '../../assets/images/mentoria.jpg';
import compartilhe from '../../assets/images/compartilhe.png';

export default function Mentoria() {
  return (
   <main className={s.main}>
            <h1>Mentoria</h1>
      
            <section>
              <article>
                <Card 
                img={mentoria}
                alt="Imagem de uma mentoria"
                titulo="Mentoria de Carreira e Emprego"
                subtitulo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
                botao="Quero Participar"
                />
              </article>
      
              <article>
                <Card 
                img={compartilhe}
                alt="Imagem de compartilhamento"
                titulo="Compartilhe sua experiência"
                subtitulo="Oriente jovens e profissionais iniciantes em sua área."
                botao="Quero Participar"
                />
              </article>
      
              <article>
                <Card 
                img={acompanhe}
                alt="Imagem de acompanhamento"
                titulo="Acompanhamento"
                subtitulo="Participe como guia em jornadas de aprendizado e desenvolvimento."
                botao="Quero Participar"
                />
              </article>
            </section>
          </main>
  )
}
