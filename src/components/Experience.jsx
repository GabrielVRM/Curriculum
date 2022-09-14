export function Experience() {
  return (
    <div className="p-10 w-full h-full sm:overflow-hidden">
      <div className="flex justify-center text-3xl mt-">
        <span className="text-white tracking-widest text-4xl">Certificações</span>
      </div>
      <div className="flex justify-center w-full h-16 mt-10 gap-10 ">
        <div className=" justify-center text-center items-center grid grid-cols-1">
          <span className="mt-7 ">
            <a href="#">Havard - introdução a Ciencias da Computação</a>
            <strong className="text-green-500"> - Concluido</strong>
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
            <strong className="text-green-500"> - Concluido</strong>
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
