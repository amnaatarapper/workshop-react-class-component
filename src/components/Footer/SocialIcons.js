import socialIcons from "../../icons";

const SocialIcons = () => {
  return (
    <section>
      <h2>Follow me on ...</h2>
      <ul className="icons">
        {/* Renders social network icons out of every element in images array */}
        {socialIcons.map((icon, index) => {
          const { icon: iconClass, text } = icon;
          return (
            <li key={index}>
              <a href="/" className={`icon brands ${iconClass}`}>
                <span className="label">{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SocialIcons;
