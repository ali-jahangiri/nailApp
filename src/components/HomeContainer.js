import React from "react";
import DragContextProvider from "./Drag/DragContext";
import HelloUser from "./HellowUser";

const HomeContainer = () => {
  return (
    <div>
      <HelloUser />
      <DragContextProvider />
    </div>
  );
};

export default HomeContainer;
