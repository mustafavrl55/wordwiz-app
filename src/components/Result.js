import React, { useState } from "react";
import { calculateRead } from "@/helper";


const Result = ({ data }) => {
  const words = data.split(/\s+/).filter(Boolean).length;

  const letter = data.length;

  

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center py-10 px-10 dark:text-white ">
      <div>
        <h2 className="text-4xl font-medium">Text Summary</h2>
        <p className="text-lg mt-8">
          {" "}
          <span className="font-medium">{words}</span> words and{" "}
          <span className="font-medium">{letter}</span> characters
        </p>
        <p className="text-lg mt-4">{calculateRead(data)} Minutes read</p>
      </div>
      <div className="mt-10">
        <h2 className="text-4xl font-medium">Preview</h2>
        <p className="text-lg mt-4"> {data || "Nothing to preview...!!"} </p>
      </div>
    </div>
  );
};

export default Result;
