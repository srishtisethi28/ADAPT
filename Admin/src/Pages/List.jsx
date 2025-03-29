import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/item/list`);
    if (response) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeItem = async (Id) => {
    const response = await axios.post(`${url}/api/item/remove`, { id: Id });
    await fetchList();
    if (response) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex flex-col px-20 py-12 w-full ">
      <p className="text-lg font-semibold text-white">All Items List</p>
      <div className="w-full mt-4">
        <div className="grid  grid-cols-[1fr_3fr_1fr] items-center gap-4 p-3 border border-gray-300 text-sm font-semibold bg-slate-700  md:grid md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr]  text-white">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] items-center gap-4 p-3 border border-gray-300 text-sm md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr]"
          >
            <img
              src={`${url}/images/` + item.image}
              alt=""
              className="w-12 h-12 object-cover"
            />
            <p className="text-[#fcfcfc]">{item.name}</p>
            <p className="text-[#fcfcfc]">{item.category}</p>
            <p className="text-[#fcfcfc]">${item.price}</p>
            <p
              onClick={() => removeItem(item._id)}
              className="cursor-pointer text-red-500 font-semibold"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
