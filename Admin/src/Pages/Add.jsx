import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/item/add`, formData);
      setData({ name: "", description: "", price: "", category: "" });
      setImage(false);
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="w-3/4 ml-[max(5vw,25px)] mt-12 text-gray-800 text-lg">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-800 placeholder:text-black"
      >
        <div className="flex flex-col w-[max(40%,280px)]">
          <p className="text-white">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
              className="w-32"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
            className="text-gray-800 "
          />
          <p className="text-white">Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="p-2 border rounded appearance-none !text-gray-800"
          />
        </div>
        <div className="flex flex-col w-[max(40%,280px)]">
          <p className="text-white">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            className="p-2 border rounded  appearance-none !text-gray-800"
            required
          ></textarea>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <p className="text-white">Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="max-w-32 p-2 border rounded  appearance-none !text-gray-800"
            >
              <option value="Wheelchairs" className="text-gray-400">Wheelchairs</option>
              <option value="Walkers" className="text-gray-400">Walkers</option>
              <option value="Canes" className="text-gray-400">Canes</option>
              <option value="Hearing Aids" className="text-gray-400">Hearing Aids</option>
              <option value="Braillies" className="text-gray-400">Braillies</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-white">Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              className="max-w-32 p-2 border rounded  appearance-none !text-gray-800"
            />
          </div>
        </div>
        <button
          type="submit"
          className="max-w-32 p-2 bg-rose-500 text-white rounded cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
