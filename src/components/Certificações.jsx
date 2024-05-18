import CertificadoHarvard from "../assets/PDF´s/Certificado Havard.png";
import CertificadoPowerBI from "../assets/PDF´s/CertificadoPowerBi.jpg";
import CertificadoBancoDeDados from "../assets/PDF´s/bancoDados.jpg";
import fullstack from "../assets/PDF´s/fullstack.jpg";
import docker from "../assets/PDF´s/docker.jpg";
import js from "../assets/PDF´s/js.jpg";
import github from "../assets/PDF´s/github.jpg";
import nodejs from "../assets/PDF´s/nodejs.jpg";
import Bulma from "../assets/PDF´s/certificado Bulma.jpg";

export function Experience() {
  return (
    <div className="p-[20px] w-full  ">
      <span className="flex justify-center text-4xl  text-white ">
        Certificações
      </span>
      <div className="flex items-center justify-center">
        <div className="w-10 h-[0.5px] m-4 border bg-white " />
        <div className=" text-white text-center">
          <span>Cursos e certificações </span>
        </div>

        <div className=" w-10 h-[0.5px] m-4 border bg-white" />
      </div>
      <div className="flex justify-center w-full h-16 mt-10 gap-10 ">
        <div className=" justify-center text-center items-center grid grid-cols-1">
          <div className=" text-white text-center">
            <div className="flex items-center justify-center ">
              <span className="text-gray-300 text-xl ">Graduações</span>
            </div>
          </div>
          <a  target="_blank" className="mt-2  hover:cursor-pointer hover:animate-spin  hover:scale-110 ">
            <span href="#">Análise e Desenvolvimento de Sistemas - Unisa</span>
            <strong className="text-red-500"> - Incompleto</strong>
          </a>
          <div className="flex items-center justify-center mt-10">
            <span className="text-gray-300 text-xl ">Onebitcode</span>
          </div>
          <a target="_blank"
            href={fullstack}
            className="mt-2 hover:cursor-pointer hover:animate-spin hover:scale-110 "
          >
            <span href="#">FullStack JavaScript</span>
            <strong className="text-green-500"> - Concluído </strong>
          </a>
        
          <a target="_blank"
            href={nodejs}
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Node Js</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>{" "}
          <a target="_blank"
            href={Bulma}
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Bulma</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
          <a target="_blank"
            href={Bulma}
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>WebScraping</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
      

          <a target="_blank"
            href={js}
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>JavaScript Avançado</span>
            <strong className="text-green-500"> - Concluído </strong>
          </a>
          <a target="_blank"
            href={docker}
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Docker</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
          <a target="_blank"
            href={CertificadoBancoDeDados}
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>MySql</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>

          <div className="flex items-center justify-center mt-10">
            <span className="text-gray-300 text-xl ">Havard</span>
          </div>
          <a target="_blank"
            href={CertificadoHarvard}
            className="mt-2 hover:cursor-pointer hover:animate-spin hover:scale-110 "
          >
            <span>Harvard - introdução a Ciências da Computação</span>
            <strong className="text-green-500"> - Concluído</strong>
          </a>
       
          <div className="flex items-center justify-center mt-10">
            <span className="text-gray-300 text-xl ">Udemy</span>
          </div>
          <a target="_blank"
            href={CertificadoPowerBI}
            className="mt-2 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Power Bi</span>
            <strong className="text-green-500"> - Concluído</strong>
          </a>
      
         
       
          <div className="flex items-center justify-center mt-10">
            <span className="text-gray-300  text-xl">Rocketseat</span>
          </div>
          <a target="_blank"
            href="https://app.rocketseat.com.br/certificates/81f3d8e1-d395-4d50-92a0-7201baafb9c7"
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Frontend - React</span>
            <strong className="text-green-500"> - Concluído </strong>
          </a>
          <a target="_blank"
            href="https://app.rocketseat.com.br/certificates/45614819-c809-43fd-a3b1-d944f8f279a6"
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Git & Github</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>

          <a target="_blank"
            href="https://app.rocketseat.com.br/certificates/57bfa94a-0cf8-49ea-b18b-c016754eee51"
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>JavaScript</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>

          <a target="_blank"
            href="https://app.rocketseat.com.br/certificates/37817b8b-0d6f-4729-9ba1-6b26da1eb9c0"
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Html & Css</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>

          <a 
            href="https://app.rocketseat.com.br/certificates/11368a67-aa44-49eb-b8cf-195573a8ab37"
            target="_blank"
            className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110"
          >
            <span>Backend</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
