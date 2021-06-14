import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Lakshay Maini Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
