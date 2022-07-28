import React, { useState } from "react";
import { MenuView } from "./styles";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Menu() {
  let [open, setOpen] = useState<boolean>(false);
  const changeIcon = () => {
    setOpen(!open);
  };
  return (
    <MenuView>
      <nav className="relative px-2 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div></div>

          <ul className="hidden md:flex space-x-6">
            <li className=" pl-4">
              <Link href="/">
                <a className="link"> Quem Somos</a>
              </Link>
            </li>
            <li className="  pl-4">
              <Link href="/sobre">
                <a className="link">Equipe</a>
              </Link>
            </li>

            <li className="  pl-4">
              <Link href="/autores">
                <a className="link">Espaço</a>
              </Link>
            </li>
            <li className="  pl-4">
              <Link href="/">
                <a className="link">Contato</a>
              </Link>
            </li>
            <li className="  pl-4">
              <Link href="/">
                <a className="link">
                  <img src="/search.svg" alt="" />
                </a>
              </Link>
            </li>
          </ul>

          <button
            type="button"
            id="mobile-icon"
            className="md:hidden"
            onClick={() => changeIcon()}
          >
            <FaBars />
          </button>
        </div>

        <div className="md:hidden flex justify-center mt-3 w-full">
          <div
            id="mobile-menu"
            className={`mobile-menu z-40 absolute top-23 w-full ${
              open ? "block active" : ""
            }`}
          >
            <ul className="bg-[#F1F1F1BD] shadow-lg leading-9 font-bold h-screen">
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/" className="block pl-7">
                  Quem Somos
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/sobre" className="block pl-7">
                  Equipe
                </Link>
              </li>

              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/autores" className="block pl-7">
                  Autores
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/" className="block pl-7">
                  Espaço
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/" className="block pl-7">
                  Contato
                </Link>
              </li>
              <li className="  pl-4">
                <Link href="/">
                  <a className="link">
                    <img src="/search.svg" alt="" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MenuView>
  );
}

export default Menu;
