import images from "../images";

const ImagesContainer = () => {
  return (
    <div id="main">
      {/* Renders articles out of every element in images array */}
      {images.map((img, index) => {
        const { id, fullSize, path, title, article } = img;
        return (
          <article className="thumb" key={id}>
            <a href={fullSize} className="image">
              <img src={path} alt="" />
            </a>
            <h2>{`${index + 1}. ${title}`}</h2>
            <p>{article}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ImagesContainer;
