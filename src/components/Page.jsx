export function Page() {
  return (
    <div id="Start" className="px-20 sm:px-0 sm:m-0 sm:text-center text-center justify-center">
      <div className="w-full h-full mt-10 sm:mt-10 text-center justify-center " >
        <p className="tracking-[0.3rem] text-2xl mb-2 px-3 sm:text-[15px]">
          Olá, meu nome é
        </p>
        <h1 className="tracking-[0.5rem] text-6xl">
          Gabriel <strong className="text-rose-400">Vieira</strong>
        </h1>
        <h2 className="tracking-[0.3rem] text-2xl mt-2 mb-8 px-3 sm:px-0 sm:text-[15px] ">
          Sou um Developer Full-Stack
        </h2>
        <a
          href="https://wa.me/5511986431855"
          className="bg-white text-lg border p-2 w-full sm:w-2/4 sm:p-3 rounded-full h-10  text-black hover:text-gray-50 hover:bg-black sm:mt-16  sm:justify-center"
          >
          Contrate-me
        </a>
      </div>
    </div>
  );
}
