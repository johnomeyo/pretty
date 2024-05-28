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
          <h2 class="card__title">Astropphel</h2>
          <p class="card__description">
          {"Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words)"}
          </p>
        </div>
      </div>
    </article>
  );
};
