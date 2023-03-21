import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Faq = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;
  return (
    <div className="shadow rounded border border-gray-100 border-t-0 max-w-lg bg-gray-200 my-10 mx-auto">
      <div className="p-4 text-xl relative font-medium">
        <div className="w-5/6">are you a cat?</div>
        <button
          aria-label="question-expander"
          className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
          onClick={() => setExpand(!expand)}>
          {expand ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>
      </div>
      <div className={ansClass}>i am not a cat</div>
    </div>
  );
};

export default Faq;
