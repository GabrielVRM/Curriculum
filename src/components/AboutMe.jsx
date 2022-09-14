import GabrielPage from "../assets/GabrielPage.png";

export function AboutMe() {
  return (
    <div id="About" className="p-20 sm:w-full sm:h-full sm:grid-cols-1">
      <span className="flex justify-center text-4xl  text-black">Sobre</span>
      <div className="flex items-center justify-center">
        <div className="w-10 h-[0.5px] m-4 border bg-slate-700" />
        <div className=" text-black sm:text-center">
          <span>Quem sou eu? </span>
        </div>
        <div className=" w-10 h-[0.5px] m-4 border bg-slate-600" />
      </div>

      <div className="flex justify-center w-full p-32 sm:grid grid-cols-1 sm:p-0 sm:my-20">
        <div className="text-black w-3/4 sm:grid sm:w-full">
          <h2 className="text-2xl m-3 sm:text-center ">
            Meu Nome é Gabriel e sou Developer!
          </h2>
          <p className="text-1xl sm:text-center">
            {" "}
            Developer com foco em Front-end, porém tive um pouco de contato com
            back-end, com foco na linguagem SQL em Banco de Dados - MySql.
            Ingressei recentemente nesta área, estou cerca de 1 ano como
            programador, atualmente moro no Grajaú, tenho 20 anos, gosto de praticar esportes, e sair socialmente. 
          </p>
        </div>
        <div className="text-black w-3/4 sm:text-center  ">
          <img
            className="mx-[100px] my-[-100px] border-hidden rounded-full sm:hidden "
            src={GabrielPage}
          />
        </div>
      </div>
    </div>
  );
}
