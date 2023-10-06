import { useRef, useState } from "react";

const Section = ({ data, setData }) => {
  // cpoy için
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  // copy
  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
    }
  };

  // clear
  const clearButton = () => {
    setData("");
  };

  //küçük harf
  const handleConvertToLowerCase = () => {
    setData(data.toLowerCase());
  };
  // büyük harf
  const handleConvertToUpperCase = () => {
    const newText = data.toUpperCase(); // Metni büyük harfe çevir
    setData(newText);
  };

  // boşluk

  const removeExtraSpaces = () => {
    // Boşlukları temizleme işlemi burada yapılacak

    const cleanedText = data.replace(/\s+/g, " ");
    setData(cleanedText);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center py-10 px-10 dark:text-white  ">
      <h2 className="text-4xl opacity-80 font-medium">Enter Text to analyze</h2>
      <textarea
        className="p-4 mt-8 rounded-md outline-none  border-solid focus:border-4 border-[#9EDDFF] dark:bg-[#86198f] "
        placeholder="Enter the Text here..."
        cols="100"
        rows="8"
        ref={textareaRef}
        defaultValue={data}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <div className="mt-6 flex flex-wrap justify-start items-center gap-4 opacity-70">
        <button
          className="text-white bg-[#0d6efd] dark:bg-[#0891b2] rounded-md px-4 py-2 "
          onClick={() => handleConvertToUpperCase()}
        >
          Convert to Uppercase
        </button>
        <button
          className="text-white bg-[#0d6efd] dark:bg-[#0891b2] rounded-md px-4 py-2 "
          onClick={() => handleConvertToLowerCase()}
        >
          Convert to Lowercase
        </button>
        <button
          className="text-white bg-[#0d6efd] dark:bg-[#0891b2] rounded-md px-4 py-2 "
          onClick={() => removeExtraSpaces()}
        >
          Remove Extra Spaces
        </button>
        <button
          className="text-white bg-[#0d6efd] dark:bg-[#0891b2] rounded-md px-4 py-2 "
          onClick={() => handleCopy()}
        >
          Coppy Text
        </button>
        <button
          className="text-white bg-[#0d6efd] dark:bg-[#0891b2] rounded-md px-4 py-2 "
          onClick={() => clearButton()}
        >
          Clear Text
        </button>
      </div>
    </div>
  );
};

export default Section;
