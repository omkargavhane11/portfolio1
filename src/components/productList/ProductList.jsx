import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        {/* <h1 className="pl-title">Create & Inspire with your work</h1> */}
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Sample projects to give an idea of my skill level. Don't judge me with
          this work only, I have a lot more to offer 😎
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
