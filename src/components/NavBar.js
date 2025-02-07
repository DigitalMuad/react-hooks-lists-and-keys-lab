import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((link) => (
    <a key={link} href={"#" + link} style={{ margin: "0 10px", textDecoration: "none", color: "black" }}>
      {link}
    </a>
  ));

  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#f0f0f0", borderBottom: "1px solid #ddd" }}>
      {anchors}
    </nav>
  );
}

export default NavBar;