const Header = () => {
  const callback = () => {
    console.log("Header clicked!!!!!!!!!");
  };
  return (
    <header id="header">
      <h1 onClick={callback}>
        <strong>Multiverse</strong> by HTML5 UP
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#footer" className="icon solid fa-info-circle">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
