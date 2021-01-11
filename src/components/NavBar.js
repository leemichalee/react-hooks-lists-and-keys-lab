import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const betterlinks = links.map((link) => (
    <a key={link} href={"#"+link}>
      {link}
    </a>
  ))

  return <nav>
    {betterlinks}
    </nav>;
}

export default NavBar;
