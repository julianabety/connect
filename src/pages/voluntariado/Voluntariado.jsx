import Card from "../../components/cards/Card";
import s from '../../../src/styles.module.scss';
import mutirao from '../../assets/images/mutirao.png';
import esporte from '../../assets/images/esporte.jpg';
import aulas from '../../assets/images/aulas.jpg';

export default function Voluntariado() {
  return (
    <main className={s.main}>
                <h1>Voluntariado</h1>
          
                <section>
                  <article>
                    <Card 
                    img={mutirao}
                    alt="Imagem de um mutirão de reciclagem"
                    titulo="Mutirão de reciclagem"
                    subtitulo="Coletar materiais recicláveis e orientar sobre descarte consciente."
                    botao="Quero Participar"
                    />
                  </article>
          
                  <article>
                    <Card 
                    img={aulas}
                    alt="Imagem de aulas de tecnologia"
                    titulo="Aulas de Tecnologia"
                    subtitulo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
                    botao="Quero Participar"
                    />
                  </article>
          
                  <article>
                    <Card 
                    img={esporte}
                    alt="Imagem de esporte e inclusão"
                    titulo="Esporte e Inclusão"
                    subtitulo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
                    botao= "Quero Participar"
                    />
                  </article>
                </section>
              </main>
  )
}
