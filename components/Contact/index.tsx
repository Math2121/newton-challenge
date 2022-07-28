import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { validationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
type UserSubmitForm = {
  nome: string;
  assunto: string;
  email: string;
  mensagem: string;
};
export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = handleSubmit((data:any) => {
    alert(JSON.stringify(data))
    reset()
  });
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

      <form
        onSubmit={onSubmit}
        className="bg-[#FBFBFB]  shadow-md p-10 pb-28 mt-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2 mb-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              className={`bg-[#F1F1F1BD] w-full h-14  text-[#333333] p-2 rounded-xl mb-2 ${errors.nome ? 'border-red-100 border': ''}`}
              {...register("nome")}
            />
            <div className="text-red-100 text-left">{errors.nome?.message}</div>
            <input
              type="text"
              placeholder="Email"
              className={`bg-[#F1F1F1BD] w-full h-14  text-[#333333] p-2 rounded-xl mb-2 ${errors.email ? 'border-red-100 border': ''}`}
              {...register("email")}
            />
            <div className="text-red-100 text-left">
              {errors.email?.message}
            </div>
            <select
              className={`form-select form-select-sm h-14 bg-[#F1F1F1BD] w-full p-2 text-[#333333] rounded-xl transition ease-in-out m-0 ${errors.assunto ? 'border-red-100 border': ''}`}
              {...register("assunto")}
            >
              <option  className="text-[#333333]">
                Assunto
              </option>
              <option value="1" className="text-[#333333]">
                One
              </option>
              <option value="2" className="text-[#333333]">
                Two
              </option>
              <option value="3" className="text-[#333333]">
                Three
              </option>
            </select>
            <div className="text-red-100 text-left">
              {errors.assunto?.message}
            </div>
          </div>
          <div className="h-full">
            <textarea
              placeholder="Mensagem"
              cols={30}
              className={`bg-[#F1F1F1BD] w-full h-full mt-2 sm:mt-0 p-2 rounded-xl mb-2 ${errors.mensagem ? 'border-red-100 border': ''}`}
              {...register("mensagem")}
            />
            <div className="text-red-100 text-left">
              {errors.mensagem?.message}
            </div>
          </div>
        </div>

        <button className="bg-red-100 p-2   rounded-xl pr-5 pl-5 text-white  float-right">
          Enviar
        </button>
      </form>
    </div>
  );
}
