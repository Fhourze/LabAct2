function Header() {
  return (
    <div className="Header">
      <div className="inner-header">
        <img src="ACE.png"></img>
        <div className="search-bar">
          <input type="text" placeholder="  Search" />
          <p>Philippines</p>
        </div>
      </div>
      <div className="pages">
        <a>DEPARTMENTS</a>
        <a>STORE LOCATIONS</a>
        <a>PROMOS</a>
        <a>WHAT'S NEW</a>
        <a>NEWS</a>
        <a>ACE REWARDS</a>
      </div>
    </div>
  );
}

export default Header;
