function Header() {
  const items = ["Characters", 
    "Comics", 
    "Movies", 
    "TV",
    "Games", 
    "Collectibles", 
    "Videos", 
    "Fans", 
    "News", 
    "Shop"];
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
      
        <img src="/img/dc-logo.png" alt="logo" width="80" />
        <ul className="navbar-nav">
          {items.map((item) => (
            <li className="nav-item" key={item}>
              <a className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

}

export default Header