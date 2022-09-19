import "./product.css";

const Product = ({ item }) => {
  return (
    <div className="p">
      <div className="p-top"></div>
      <div className="p-bottom">
        <div className="p-project">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.img} alt="" className="p-img" />
          </a>
        </div>
        {/* <div className="p-detail">
          <div className="p-desc-name">Chat App</div>
          <div className="p-desc-desc">
            Users can interact with each other in real time
          </div>
          <div className="p-links">
            <div className="p-link-item">linkedIn</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
