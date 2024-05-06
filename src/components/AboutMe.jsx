import GabrielPage from "../assets/GVRM.jpg";

export function AboutMe() {
  return (
    <div id="About" className="p-20 sm:p-5 sm:w-full sm:h-full sm:grid-cols-1">
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
          <h2 className="sm:text-start sm:m-0 sm:p-0 text-2xl m-3 mb-10  ">
            Meu Nome é Gabriel e sou Developer!
          </h2>
          <h3 className=" text-xl m-3 sm:text-start sm:mt-10 ">
            Minha Carreira sendo um Dev 👨‍💻 
          </h3>
          <p className="text-1xl sm:text-letf sm:text-justify ">
            {" "}
            Developer Full-Stack, NodeJs & ReactJS, Experiência em Database, 
            Realizava extrações de relatórios, atualizações em tabelas, utilizando linguagem SQL, 
            conhecimento em SGBD. Tenho experiência com Front-end, utilizando JavaScript e React, 
            criei landing page estática e dinâmica. Conhecimentos em Back-end, 
            utilizando NodeJs com express e fastify e experiência com swagger. Estou cerca de 3 anos como um desenvolvedor
            
            atualmente moro no Grajaú, , gosto de praticar esportes, e sair socialmente. 
          </p>
          <h3 className="text-xl m-3 sm:text-start sm:mt-12">
            Um pouco sobre mim 😁
          </h3>
          <p className="text-1xl sm:text-center sm:text-letf sm:text-justify">
            Eu amo praticar esportes, 
            para ser mais específico o futebol, curto ouvir músicas, 
            para realizar quaisquer tipos de tarefas,
            seja lavar uma louça ou desenvolver um software hehe, meu estilo musical é bem variado, mas posso dizer que tenho preferencia por pagode e sertanejo,
            gosto muito de viajar e conhecer lugares novos, 
            tenho como objetivo ser um GRANDE desenvolvedor e um HOMEM melhor ainda!
             Moro em São Paulo sp - Grajaú, resido atualmente com minha mãe e irmãos.  
          </p>
        </div>
        <div className="text-black w-80  sm:text-center  ">
          <img
            className="mx-[100px] my-[-100px] border-hidden rounded-full sm:hidden "
            src={GabrielPage}
          />
        </div>
      </div>
    </div>
  );
}
