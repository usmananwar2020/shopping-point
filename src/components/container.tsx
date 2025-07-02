// src/components/Container.tsx
import React from "react";
import TopNavBar from "./topNavigationbar";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar/>
      <main className="flex-grow p-8 ">{children}</main>
    </div>
  );
};

export default Container;
