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
          <a className="mt-7  hover:cursor-pointer hover:animate-spin  hover:scale-110 ">
            <span href="#">Análise e Desenvolvimento de Sistemas - Unisa</span>
            <strong className="text-red-500"> - Incompleto</strong>
          </a>
          <a href={fullstack} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110 ">
            <span href="#">FullStack JavaScript</span>
            <strong className="text-green-500">  - Concluído </strong>
          </a>
          <a href={CertificadoHarvard} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110 ">
            <span>
              Harvard - introdução a Ciências da Computação
            </span>
            <strong className="text-green-500"> - Concluído</strong>
          </a>
          <a href={js} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >JavaScript Avançado</span>
            <strong className="text-green-500"> - Concluído </strong>
          </a>
          <a href={CertificadoPowerBI} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >Power Bi - Udemy</span>
            <strong className="text-green-500"> - Concluído</strong>
          </a>
          <a href="#" className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >React</span>
            <strong className="text-green-500"> - Concluído </strong>
          </a>
          <a href={CertificadoBancoDeDados} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >MySql</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
          <a href={docker} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >Docker</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
          <a  href={github} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >Git & Github</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
          <a href={nodejs} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >Node Js</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>{" "}
          <a href={Bulma} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >Bulma</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
          <a href={Bulma} className="mt-7 hover:cursor-pointer hover:animate-spin hover:scale-110">
            <span >WebScraping</span>
            <strong className="text-green-500"> - Concluido</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
