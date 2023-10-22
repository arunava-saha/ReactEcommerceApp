import React, { useState } from "react";

const SortByPricebtn = () => {
  const [first, setfirst] = useState("");
  const btnHandler = () => {};
  return (
    <div className="flex absolute top-10 right-6 px-4 py-2 rounded-full items-end bg-slate-50">
      <button onClick={btnHandler}>Sort by price</button>
    </div>
  );
};
export default SortByPricebtn;
