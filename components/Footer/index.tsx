import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <footer className="mt-20 bg-[#575756] pb-10 relative ">
      <div className="container m-auto flex items-center justify-around pt-8 flex-col sm:flex-row ">
        <div className="flex-auto"></div>

        <ul className="list-none flex-auto flex items-center justify-center gap-2 text-white font-segoe ">
          <li>
            <a href="#">Quem somos</a>
          </li>
          <li>
            <a href="#">Especialidades</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>

        <div className="flex items-end  justify-end flex-1 gap-2 text-white pt-5 sm:pt-0">
          <FaLinkedinIn />
          <FaFacebookF />
          <FaInstagram />
        </div>


      </div>
      <div className="container m-auto bg-white w-full h-0.5 mt-10"></div>

      <div className="container m-auto  text-center mt-10 text-white font-segoe">
        <p>Health Clinic São Paulo -Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
