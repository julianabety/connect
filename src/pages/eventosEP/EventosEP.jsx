import Card from "../../components/cards/Card";
import s from '../../../src/styles.module.scss';
import palestra from '../../assets/images/palestra.jpg';
import reuniao from '../../assets/images/reuniao.jpg';
import carreira from '../../assets/images/carreira.png';

export default function EventosEP() {
  return (
      <main className={s.main}>
         <h1>Eventos & Palestras</h1>
   git 
         <section>
           <article>
             <Card 
             img={palestra}
             alt=" Imagem de uma palestra motivacional"
             titulo="Empoderando Jovens para o Futuro"
             subtitulo="Atividade: Palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
             botao="Quero Participar"
             />
           </article>
   
           <article>
             <Card 
             img={reuniao}
             alt="Imagem de uma reunião de tecnologia"
             titulo="Tecnologia que Transforma"
             subtitulo="Atividade: Workshop de introdução à programação e inovação digital. Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
             botao="Quero Participar"
             />
           </article>
   
           <article>
             <Card 
             img={carreira}
             alt="Imagem de uma carreira profissional"
             titulo="Carreira e Primeiro Emprego"
             subtitulo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
             botao="Quero Participar"
             />
           </article>
         </section>
       </main>
  )
}
