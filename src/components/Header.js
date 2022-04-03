import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (e) => {
  //   console.log("clicked");
  // };
  const location = useLocation();
  return (
    <header className="header">
      <h1>karera {title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
      {/* <Button color="blue" text="add" />
      <Button color="yellow" text="add" /> */}
    </header>
  );
};

export default Header;
