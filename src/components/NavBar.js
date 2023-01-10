import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Tags = links.map((link) => {
    return (<a href={'#'+link} key={link}>{link}</a>)
  })
  return <nav>{Tags}</nav>;
}

export default NavBar;
