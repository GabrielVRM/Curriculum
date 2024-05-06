import Logo from "../assets/logo.png";

export function Header() {
  return (
    <div className="w-full sm:flex justify-between  top-[-30px] z-50  ">
    <header className="px-28  h-32" >
      <nav className="w-full ">
        <div className="relative z-50 flex p-0 justify-between sm:space-x-0">
          <img className="  w-40 h-40 animate-spin sm:w-[200px] sm:h-full sm:mt-[-40px] " src={Logo} />
        <div className=" text-sm flex items-center  md:gap-20 sm:hidden text-[18px] ">
        <a className='hover:border-b  shadow-3xl' href="#Start">Inicio</a>
        <a className='hover:border-b  shadow-3xl' href="#About">Sobre</a>
        <a className='hover:border-b  shadow-3xl' href="#Skills">Habilidades</a>
        <a className='hover:border-b  shadow-3xl' href="#contact">Contato</a>
        </div>
        </div>
    </nav>
    </header>
    </div>
  );
}
