import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ApiCall from "../config/index.js";

function AllProduct() {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    try {
      const res = await ApiCall("/objects", "GET");
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    fetchProduct()
  }, [])
  return (
    <div>
      <Sidebar />
      <div className="border-2 max-w-7xl ml-auto m-6">
        {products.map((product,index)=>{
          <div>
            <h1>{product.name}</h1>
          </div>
        })}
      </div>
    </div>
  );
}

export default AllProduct;
