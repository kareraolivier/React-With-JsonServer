import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (e) => {
  //   console.log("clicked");
  // };

  return (
    <header className="header">
      <h1>karera {title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* <Button color="blue" text="add" />
      <Button color="yellow" text="add" /> */}
    </header>
  );
};

export default Header;
