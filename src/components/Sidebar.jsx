import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="bg-blue-500 p-6 flex justify-around bg-linear-to-t from-sky-500 to-indigo-500 items-center">
        <h1 className="text-white text-4xl font-bold">Product Manager</h1>
        <p className="text-white text-xl">
          Powered by<b className="ml-4 text-2xl">SharifovDev</b>
        </p>
      </div>
      <div className="m-0.5 fixed r-0 h-full bg-gradient-to-b from-red-500 to-stone-500">
          <h1 className="p-5 text-xl font-bold">All Product</h1>
          <h1 className="p-5 text-xl font-bold">Add Product</h1>
      </div>
    </div>
  );
}

export default Sidebar;
