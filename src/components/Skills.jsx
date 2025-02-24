import { listImageLenguagens } from "./Projects";
import Logo from "../assets/LogoReact.png";
import { useState } from "react";
export function Skills() {
  const [expande, setExpande] = useState({
    node: false,
    api: false,
    filezilla: false,
    NestJSRabbitMQ: false,
    javascriptReact: false,
    sql: false,
  });
  const toggleExpand = (section) => {
    setExpande({
      ...expande,
      [section]: !expande[section],
    });
  };
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
              <img src={Logo} />
            </span>
          </span>
        </div>
      </div>
      <div className="  text-center m-1  text-black">
        <div className=" grid grid-cols-1 text-justify text-lg mt-6">
          <span className="text-center text-3xl grid grid-cols-1 mt-10 mb-4 sm:text-lg">
            <strong>Nave A vela Jovem Aprendiz - 11/2019 a 01/2021</strong>
          </span>
          <span className=" text-center text-lg grid grid-cols-1">
            Acompanhamento dos produtos da empresa, cuidando do SLA, analisando
            e criando Dashboards no Google Data Studio Google Sheeats e Excel
          </span>
        </div>
        <div className=" grid grid-cols-1 text-justify text-lg mt-6">
          <span className=" text-center text-3xl grid grid-cols-1 mt-10 mb-4  sm:text-lg">
            <strong>Onepay estagiário de Ti - 06/2021 a 03/2022</strong>
          </span>
          <span className=" block ">
            <p
              className={`  text-center transition-all duration-300 sm:text-base ${
                expande.node ? "" : "line-clamp-3"
              }`}
            >
              Realizei Suporte Técnico, Manutenção de Desktops, Atualização de
              Sistema Operacional (Windows e Ubuntu), configurações de E-mail,
              auxiliei em projetos de Desenvolvimento, Trabalhei com Linguagens
              como JavaScript, Html, Css, Frameworks como React e bibliotecas de
              estilização como Material UI e Frame Motion criei uma página de
              Rastreio para nossa empresa, consumindo API do correio e Mandaê,
              Realizei extrações no Banco de Dados, utilizando Mysql workbench e
              efetuei atualizações nas tabelas, realizei upgrade na nossa
              landing page através do wordpress.
            </p>

            <button
              className={"mt-2 block md:hidden hover:underline text-base "}
              onClick={() => {
                toggleExpand("node");
              }}
            >
              {expande.node ? "Ver menos" : "Ver mais"}
            </button>
          </span>
        </div>
        <div className=" grid grid-cols-1 text-justify text-lg ">
          <span className="text-center text-3xl grid grid-cols-1  mt-10 mb-4  sm:text-lg">
            <strong>Analista de Ti - 03/2022 - Atualmente</strong>
          </span>
          <strong className="text-center block mt-6 text-xl">Back-End:</strong>
          <div className=" flex items-center gap-10 justify-center text-center mt-8 mb-5">
            {" "}
            <img
              className="w-10"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              }
            />
          </div>
          <p
            className={`text-center transition-all duration-300 sm:text-base ${
              expande.node ? "" : "line-clamp-3"
            }`}
          >
            Experiência com frameworks Express e Fastify. No desenvolvimento com
            Node.js, foquei em aspectos importantes, como a criação de CLIs para
            atualização de dados ausentes no sistema. Além disso, desenvolvi
            crons para automatizar tarefas básicas e intermediárias, realizando
            correções automáticas ao longo do dia, com intervalos que variam de
            2 minutos a 6 horas. Utilizei ORMs como Sequelize para a comunicação
            entre SQL e Node.js.
          </p>
          <button
            className="mt-2 block md:hidden hover:underline text-base"
            onClick={() => {
              toggleExpand("node");
            }}
          >
            {expande.node ? "Ver menos" : "Ver mais"}
          </button>
          <strong className=" text-center block mt-8 text-xl ">API:</strong>
          <p
            className={`text-center transition-all duration-300 sm:text-base ${
              expande.api ? "" : "line-clamp-3"
            }`}
          >
            Desenvolvimento e documentação de APIs utilizando Swagger.
            Implementei chamadas GET, PUT, DELETE e UPDATE, utilizando Postman e
            Insomnia para testar requisições e respostas das URLs que consumi.
          </p>
          <button
            className="mt-2 block md:hidden hover:underline text-base"
            onClick={() => {
              toggleExpand("api");
            }}
          >
            {expande.api ? "Ver menos" : "Ver mais"}
          </button>
          <strong className=" text-center block mt-8 text-xl">SQL:</strong>
          <p
            className={`text-center transition-all duration-300 sm:text-base ${
              expande.sql ? "" : "line-clamp-3"
            }`}
          >
            Criação de relatórios, atualização de tabelas e execução de
            consultas complexas no MySQL Workbench. Experiência com consultas
            avançadas utilizando JOINs (INNER, LEFT, RIGHT), GROUP BY, HAVING,
            UNION e subqueries, otimizando o desempenho e a extração de dados.
            Realizei limpeza e otimização de dados no banco, incluindo a redução
            do tamanho de tabelas pesadas, que impactavam na infraestrutura da
            AWS. Essa otimização reduziu significativamente os custos
            operacionais do banco de dados, gerando economia financeira para a
            empresa.
          </p>
          <button
            className="mt-2 block md:hidden hover:underline text-base"
            onClick={() => {
              toggleExpand("sql");
            }}
          >
            {expande.sql ? "Ver menos" : "Ver mais"}
          </button>
          <strong className=" text-center block mt-8 text-xl">
            FileZilla:
          </strong>
          <p
            className={`text-center transition-all duration-300 sm:text-base ${
              expande.filezilla ? "" : "line-clamp-3"
            }`}
          >
            Utilização para a troca de certificados SSL em servidores,
            garantindo a segurança das conexões.
          </p>
          <button
            className="mt-2 block md:hidden hover:underline  text-base"
            onClick={() => {
              toggleExpand("filezilla");
            }}
          >
            {expande ? "Ver menos" : "Ver mais"}
          </button>
          <strong className=" text-center block mt-8 text-xl">
            NestJS e RabbitMQ:
          </strong>
          <p
            className={`text-center transition-all duration-300 sm:text-base ${
              expande.NestJSRabbitMQ ? "" : "line-clamp-3"
            }`}
          >
            Utilização do NestJS para interagir com a mensageria RabbitMQ,
            facilitando a atualização de pendências em lotes. No processo, o
            Node.js chamava o RabbitMQ, enviando as mensagens para uma fila. O
            NestJS então lia as mensagens e realizava as atualizações
            necessárias, garantindo eficiência no processamento de dados em
            segundo plano.
          </p>
          <button
            className=" mt-2 block md:hidden hover:underline text-base mb-4"
            onClick={() => {
              toggleExpand("NestJSRabbitMQ");
            }}
          >
            {expande ? "Ver menos" : "Ver mais"}
          </button>
          <div className="text-center block mt-10 text-xl ">Front-End:</div>

          <strong className=" flex justify-center gap-14 mt-8 mb-5">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            />{" "}
            <img
              className="w-10"
              src="            https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg
"
            />{" "}
          </strong>
          <p
            className={`text-center transition-all duration-300 sm:text-base ${
              expande.javascriptReact ? "" : "line-clamp-3"
            }`}
          >
            Desenvolvimento de landing pages estáticas e dinâmicas com
            componentes reutilizáveis e gerenciamento eficiente de estados.
            Utilizei React Hooks como useState, useEffect, useContext e hooks
            personalizados. Consumi APIs com axios, e trabalhei com lodash
            (utilizando chunk para manipulação de dados em lotes) e moment para
            formatação de datas. Para estilização, usei Material UI.
          </p>
          <button
            className="mt-2 block md:hidden hover:underline text-base"
            onClick={() => {
              toggleExpand("javascriptReact");
            }}
          >
            {expande ? "Ver menos" : "Ver mais"}
          </button>
        </div>
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
