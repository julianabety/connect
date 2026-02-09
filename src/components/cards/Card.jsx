import  s from './Card.module.scss';

export default function Card(props) {

  return (
    <article className={s.card}>
      <img src={props.img} alt={props.alt}/>
      <h2>{props.titulo}</h2>
      <p>{props.subtitulo}</p>
      <button>{props.botao}</button>
    </article>
  )
}
