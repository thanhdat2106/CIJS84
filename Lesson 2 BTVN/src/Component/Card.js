const Card = ({ title, image, description }) => {
  return (
    <>
      <div class="column-grid">
        <span class="icon">
          <img
            width="48px"
            height="48px"
            scr={image}
            data-scr={image}
            alt={title}
          />
        </span>
      </div>
      <p class="title">{title}</p>
      <p class="description">{description}</p>
    </>
  );
};
export default Card;
