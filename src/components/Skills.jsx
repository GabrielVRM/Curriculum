import { listImageLenguagens } from "./Projects";
import Logo from '../assets/LogoReact.png'

export function Skills() {
  return (
    <div id="Skills" className="p-20">
      <span className="flex justify-center text-4xl  text-black sm:text-center">
        Especialidades
      </span>
      <div className="flex items-center justify-center">
        <div className="w-10 h-[0.5px] m-4 border bg-slate-600" />
        <div className=" text-black sm:text-center">
          <span>Qualificação & Experiencia </span>
        </div>
        <div className=" w-10 h-[0.5px] m-4 border  bg-slate-600" />
      </div>

      <div className="grid grid-cols-2 p-20 sm:p-0 sm:grid sm:grid-cols-1">
        <div className=" flex justify-center  sm:p-12 ">
          <span className="text-black text-6xl sm:text-4xl ">
          Minhas especialidades, competências e experiencias!
          </span>
        </div>
        <div className="flex justify-text text-justify py-5 sm:py-0 p-0 ">
          <span className="text-black indent-4 sm:text-center ">
            <span className="text-center grid grid-cols-1 w-60 mx-40  animate-spin sm:mx-0">
        <img src={Logo}/>
            </span>
          </span>
        </div>
      </div>
      <div className="  text-center m-1  text-black">
      <span className="text-center grid grid-cols-1 mt-10">
<strong>Nave A vela Jovem Aprendiz - 11/2019 a 01/2021</strong>
</span>
<span className="text-center grid grid-cols-1">
Acompanhamento dos produtos da empresa, cuidando do SLA,
analisando e criando Dashboards no Google Data Studio Google
Sheeats e Excel
</span>
<span className="text-center grid grid-cols-1 mt-10">
<strong>Onepay estagiário de Ti - 06/2021 a 03/2022</strong>
</span>
<span className="text-center grid grid-cols-1">
Realizei Suporte Técnico, Manutenção de Desktops, Atualização de
Sistema Operacional (Windows e Ubuntu), configurações de E-mail,
auxiliei em projetos de Desenvolvimento, Trabalhei com Linguagens
como JavaScript, Html, Css, Frameworks como React e bibliotecas de
estilização como Material UI e Frame Motion criei uma página de
Rastreio para nossa empresa, consumindo API do correio e Mandaê,
Realizei extrações no Banco de Dados, utilizando Mysql workbench e
efetuei atualizações nas tabelas, realizei upgrade na nossa landing
page através do wordpress.
</span>

<span className="text-center grid grid-cols-1  mt-10">
<strong>Analista de Ti - 03/2022 - Atualmente</strong>
</span>
<span className="text-center grid grid-cols-1">
Banco de Dados Mysql - Utilizando a Linguagem Sql manipulando
dados para extrair relatórios e realizar updates, Suporte Técnico, em Geral (manutenção em computadores e auxílio rotineiro com
problemas de lógica para Excel ou linguagens de programação)
auxílio em problemas no Dashboard, utilizando React JS, Material
UI. Manutenção na nossa landing Page com Wordpress.
</span>
</div>
      <div className="grid grid-cols-2  px-40 py-20 m-1 sm:px-0 sm:py-0  sm:grid-cols-1 ">
        <div className=" block justify-center w-full mt-10 text-black text-lg sm:text-1xl ">
          <span className="block mt-12  ">HTML</span>
          <div className="border border-lime-500 w-[100%]  "></div>
          <span className="block mt-6 ">CSS & frameworks</span>
          <div className="border border-lime-500 w-[80%]"></div>
          <span className="block mt-6 ">JavaScript</span>
          <div className="border border-lime-500 w-[80%]"></div>
          <span className="block mt-6 ">ReactJS</span>
          <div className="border border-lime-500 w-[80%]"></div>
          <span className="block mt-6 ">TypeScript</span>
          <div className="border border-lime-500 w-[70%]"></div>
          <span className="block mt-6 ">Docker</span>
          <div className="border border-lime-500 w-[70%]"></div>
          <span className="block mt-6 ">Postman</span>
          <div className="border border-lime-500 w-[70%]"></div>
          <span className="block mt-6 ">NodeJs - Express </span>
          <div className="border border-lime-500 w-[70%]"></div>
          <span className="block mt-6 ">SQL</span>
          <div className="border border-lime-500 w-[80%]"></div>
          <span className="block mt-6 ">Mysql Workbanch</span>
          <div className="border border-yellow-400 w-[50%]"></div>
          <span className="block mt-6 ">GitHub</span>
          <div className="border border-lime-500 w-[100%]"></div>
        </div>

        <div className=" grid grid-cols-3 w-full md:p-2 gap-8 m-20 sm:m-0 sm:my-28 sm:w-full sm:grid-cols-3">
          {listImageLenguagens.map((item) => (
            <img
              className="block object-cover object-center w-3/4 rounded-lg  hover:animate-spin "
              src={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
