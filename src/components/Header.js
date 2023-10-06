import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleChange = (event) => {
    
    setTheme(event.target.checked);
    
    if (
      event.target.checked === true
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  console.log(theme);

  return (
    <div className=" max-w-full px-10 py-4 flex-col md:flex-row flex items-center gap-6 bg-[#eee] dark:bg-[#86198f] dark:text-white ">
      <h2 className=" text-xl font-bold ">WordWiz</h2>
      <div className="flex justify-between items-center w-full text-base ">
        <div className=" flex-col  md:flex-row flex gap-4 ">
          <span>Home</span>
          <span>About</span>
        </div>
        <div className="flex-col  md:flex-row flex gap-4 items-center">
          <Switch value={theme} onChange={handleChange} {...label} />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
