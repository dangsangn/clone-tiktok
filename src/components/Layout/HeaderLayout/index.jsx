import Header from "@/components/Layout/components/Header";
import React from "react";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
