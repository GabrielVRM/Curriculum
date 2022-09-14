export function Experience() {
  return (
    <div className="p-10 w-full h-full sm:overflow-hidden">
      <span className="flex justify-center text-4xl  text-white">Certificações</span>
      <div className="flex items-center justify-center">
        <div className="w-10 h-[0.5px] m-4 border bg-white " />
        <div className=" text-white text-center">
          <span>Cursos e certificações </span>
          
        </div>
        <div className=" w-10 h-[0.5px] m-4 border bg-white" />
      </div>
      <div className="flex justify-center w-full h-16 mt-10 gap-10 ">
        <div className=" justify-center text-center items-center grid grid-cols-1">
        <span className="mt-7 ">
            <a href="#">Análise e Desenvolvimento de Sistemas</a>
            <strong className="text-red-500"> - Incompleto</strong>
          </span>
          <span className="mt-7 ">
            <a href="#">Harvard  - introdução a Ciências da Computação</a>
            <strong className="text-green-500"> - Concluído</strong>
          </span>
          <span className="mt-7">
            <a href="#">JavaScript - Udemy</a>{" "}
            <strong className="text-yellow-500"> - Em Andamento</strong>
          </span>
          <span className="mt-7">
            <a href="#">Wise Up Online </a>
            <strong className="text-yellow-500"> - Em Andamento</strong>
          </span>
          <span className="mt-7">
            <a href="#">Power Bi - Udemy</a>
            <strong className="text-green-500"> - Concluído</strong>
          </span>
          <span className="mt-7">
            <a href="#">React - Udemy</a>
            <strong className="text-yellow-500"> - Em Andamento</strong>
          </span>
          <span className="mt-7">
            <a href="#">MySql</a>
            <strong className="text-yellow-500"> - Em Andamento</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
