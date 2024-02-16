import React from "react";
import Zomato_company_logo from "../../assets/Zomato_company_logo.png";

const Header = () => {
  return (
    <div className="p-3 h-16">
      <img src={Zomato_company_logo} className="w-40" />
    </div>
  );
};

export default Header;
