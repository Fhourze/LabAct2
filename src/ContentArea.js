function ContentArea() {
  return (
    <div className="content-div">
      <div className="top-div">
        <div className="top-div-left">
          <div className="top-div-left-top">
            <p>SEARCH RESULTS</p>
          </div>
          <div className="top-div-left-bottom">
            <p>3 matches for dish drainer</p>
          </div>
        </div>

        <div className="search-bar-2">
          <input type="text" placeholder="  dish drainer" />
          <div className="hoverable-div">
            <span className="arrow">&gt;</span>
          </div>
        </div>
      </div>
      <p className="product-label">PRODUCTS</p>
    </div>
  );
}

export default ContentArea;
