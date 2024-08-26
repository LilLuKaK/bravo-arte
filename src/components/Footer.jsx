import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} BRAVO ARTE. <br/> DESARROLLADO POR <a className="enlace" href="https://www.linkedin.com/in/lucas-bravo-parra/" target="blank">LUCAS BRAVO PARRA</a>. <br/> TODOS LOS DERECHOS RESERVADOS. </p>
    </footer>
  );
}

export default Footer;
