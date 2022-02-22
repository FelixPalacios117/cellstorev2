import React from "react";
const Footer = () => {
  return (
    <footer className=" bg-slate-900 flex justify-evenly text-white text-lg text-center py-6 items-center">
      <div>
        <h5>CellStore</h5>
        <p>
          Somos una tienda online, dedicada a 
        </p>
        <p>
        vender celulares y accesorios de
          calidad.
        </p>
      </div>
      <div>
        <h5 >Contactos</h5>
        <ul>
          <li>
            <a  href="#!">
              Telefono:(+503) 7786-0989
            </a>
          </li>
          <li>Direccion: Final 1era calle oriente, colonia escalon local #3</li>
          <li>E-mail: cellstore117@gmail.com</li>
        </ul>
      </div>
      <div>
        <div >© 2021 CellStore</div>
      </div>
    </footer>
  );
};

export default Footer;
