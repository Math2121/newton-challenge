import { ReactNode } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <div className="container m-auto text-center mt-20">
      <div className="mb-5">
        <h2 className="font-camaro text-5xl text-black-100 mb-2">
          Fale conosco
        </h2>
        <p className="font-segoe text-black-100">
          Quer conversar com a Health Clinic?
          <br /> Basta preencher o formulário abaixo e nós entraremos <br /> em
          contato assim que possível!
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="bg-[#FBFBFB] flex items-center p-2 pr-3 pl-3 text-red-100 gap-2 rounded-sm">
          <FaPhoneAlt />
          <p>Telefone</p>
        </div>

        <div className="bg-[#FBFBFB] flex items-center p-2 pr-3 pl-3 text-red-100 gap-2 rounded-sm">
          <FaWhatsapp />
          <p>WhatsApp</p>
        </div>

        <div className="bg-[#FBFBFB] flex items-center p-2 pr-3 pl-3 text-red-100 gap-2 rounded-sm">
          <img src="chat.svg" alt="" />
          <p>Wechat</p>
        </div>
      </div>

      <form action="" className="bg-[#FBFBFB]  shadow-md p-10 pb-28 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2 mb-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              className="bg-[#F1F1F1BD] w-full h-14  text-[#333333] p-2 rounded-xl mb-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#F1F1F1BD] w-full h-14  text-[#333333] p-2 rounded-xl mb-2"
            />
            <select
              className="form-select form-select-sm h-14

    bg-[#F1F1F1BD] w-full p-2
 text-[#333333]

    rounded-xl
    transition
    ease-in-out
    m-0
   "
            >
              <option selected>Assunto</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <textarea
            placeholder="Mensagem"
            name=""
            id=""
            cols={30}
            className="bg-[#F1F1F1BD] w-full h-full mt-2 p-2 rounded-xl mb-2"
          />
        </div>

        <button className="bg-red-100 p-2   rounded-xl pr-5 pl-5 text-white rounded-sm float-right">
          Enviar
        </button>
      </form>
    </div>
  );
}
