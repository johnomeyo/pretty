import "./Card.css";
export const ImageCard = (props) => {
  return (
    <article className="card">
      <img
        class="card__background"
        src={props.imageUrl}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div class="card__content | flow">
        <div class="card__content--container | flow">
          <h2 class="card__title">{props.username}</h2>
          <p class="card__description">
          {props.caption}
          </p>
        </div>
      </div>
    </article>
  );
};
