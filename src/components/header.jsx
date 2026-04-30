function Header() {
  const items = [
    { sezione: "Characters" },
    { sezione: "Comics" },
    { sezione: "Movies" },
    { sezione: "TV" },
    { sezione: "Games" },
    { sezione: "Collectibles" },
    { sezione: "Videos" },
    { sezione: "Fans" },
    { sezione: "News" },
    { sezione: "Shop" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
      
        <img src="/img/dc-logo.png" alt="logo" width="80" />
        <ul className="navbar-nav">
          {items.map((item) => (
            <li className="nav-item" key={item.sezione}>
              <a className="nav-link">
                {item.sezione}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

}

export default Header