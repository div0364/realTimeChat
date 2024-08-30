import React from "react";
import { IoIosSend } from "react-icons/io";
const Type = () => {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center bg-gray-700">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="Type here"
            className=" border border-gray-700 flex items-center  w-full py-3 px-3 rounded-xl  grow outline-none bg-slate-900 mt-1"
          />
        </div>
        <button className="text-3xl">
          <IoIosSend className="mr-2" />
        </button>
      </div>
    </>
  );
};

export default Type;
