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
      <div className="lg:max-w-7xl md:max-w-xl mx-auto m-6 grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-2 border-red-500 rounded-xl p-2 bg-gray-2  00"
          >
            <h1>{product?.id}</h1>
            <h1>{product?.name}</h1>
            <h1>{product?.data?.Capacity}</h1>
            <h1>{product?.data?.capacity}</h1>
            <h1>{product?.data?.color}</h1>
            <h1>{product?.data?.Color}</h1>
            <h1>{product?.data?.price}</h1>
            <h1>{product?.data?.Price}</h1>
            <h1>{product?.data?.generation}</h1>
            <h1>{product?.data?.Generation}</h1>
            <h1>{product?.data?.year}</h1>
            <h1>{product?.data?.["CPU model"]}</h1>
            <h1>{product?.data?.["Hard disk size"]}</h1>
            <h1>{product?.data?.["capacity GB"]}</h1>
            <h1>{product?.data?.["Case Size"]}</h1>
            <h1>{product?.data?.["Strap Colour"]}</h1>
            <h1>{product?.data?.["Screen size"]}</h1>
            <h1>{product?.data?.Description}</h1>
            <div className="flex">
              <button className="border-2 px-2 rounded-md">Edit</button>
              <button className="border-2 px-2 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
