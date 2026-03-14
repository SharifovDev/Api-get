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
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="border-2 lg:max-w-7xl md:max-w-xl ml-auto m-6 grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border-2 border-red-500 hover:">
            <h1>{product?.id}</h1>
            <h1>{product?.name}</h1>
            <h1>{product?.data?.Capacity}</h1>
            <h1>{product?.data?.color}</h1>
            <h1>{product?.data?.price}</h1>
            <h1>{product?.data?.generation}</h1>
            <h1>{product?.data?.year}</h1>
            <h1>{product?.data?.["CPU model"]}</h1>
            <h1>{product?.data?.["Hard disk size"]}</h1>
            <h1>{product?.data?.["capacity GB"]}</h1>
            <h1>{product?.data?.["Case Size"]}</h1>
            <h1>{product?.data?.["Strap Colour"]}</h1>
            <h1>{product?.data?.["Screen size"]}</h1>
            <h1>{product?.data?.Description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
