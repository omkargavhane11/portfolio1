import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        {/* <h1 className="pl-title">Create & Inspire with your work</h1> */}
        <h1 className="pl-title">Project</h1>
        <p className="pl-desc">
          Sample project to give an idea of my skill level. There is more than
          this one project that I will add in coming weeks.
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
