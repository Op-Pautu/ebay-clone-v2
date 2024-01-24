"use client";

import React from "react";
import TopMenu from "./_includes/TopMenu";
import MainHeader from "./_includes/MainHeader";

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
