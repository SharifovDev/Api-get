import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ApiCall from "../config/index.js";

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await ApiCall("/objects", "GET");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleSave = () => {
    if (name === "" || color === "" || price === "") {
      alert("Ma'lumotlarni to'liq kiriting");
      return;
    }
    const newProduct = {
      id: products.length + 1,
      name: name,
      data: {
        color: color,
        price: price,
      },
    };

    setProducts([...products, newProduct]);
    setName("");
    setColor("");
    setPrice("");
  };

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleEdit = (product, index) => {
    setName(product.name);
    setColor(product?.data?.color);
    setPrice(product?.data?.price);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    const updated = [...products];
    updated[editIndex] = {
      ...updated[editIndex],
      name: name,
      data: {
        ...updated[editIndex].data,
        color: color,
        price: price,
      },
    };
    setProducts(updated);
    setEditIndex(null);
    setName("");
    setColor("");
    setPrice("");
  };

  return (
    <div>
      <Sidebar />
      <div className="max-w-6xl mx-auto">
        <div className="border-2 p-4 grid grid-cols-3 gap-4">
          <input
            className="border-2 p-2 rounded-xl"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 p-2 rounded-xl"
            type="text"
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            className="border-2 p-2 rounded-xl"
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mt-3">
          {editIndex === null ? (
            <button onClick={handleSave} className="border-2 p-1 rounded-xl">
              Save
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="border-2 p-1 rounded-xl bg-yellow-300"
            >
              Update
            </button>
          )}
        </div>
      </div>

      <div className="lg:max-w-7xl md:max-w-xl mx-auto m-6 grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border-2 border-red-500 rounded-xl p-2">
            <h1>{product?.id}</h1>
            <h1>{product?.name}</h1>
            <h1>{product?.data?.color}</h1>
            <h1>{product?.data?.price}</h1>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(product, index)}
                className="border-2 px-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="border-2 px-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
