import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1>karera {title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      {/* <Button color="blue" text="add" />
      <Button color="yellow" text="add" /> */}
    </header>
  );
};

export default Header;
