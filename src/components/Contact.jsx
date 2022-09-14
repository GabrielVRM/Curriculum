export function Contact() {
  return (
    <div id="contact" className="p-20">
      <span className="flex justify-center text-4xl  text-white">Contato</span>
      <div className="flex items-center justify-center">
        <div className="w-10 h-[0.5px] m-4 border bg-white " />
        <div className=" text-white text-center">
          <span>entrando em contato</span>
          
        </div>
        <div className=" w-10 h-[0.5px] m-4 border bg-white" />
      </div>
        <div className="py-20 grid grid-cols-1 text-center">
        <span>São Paulo - SP </span>
          <span>Rua Geraldo do Brumado 102 - Grajaú</span>
          <br/>
          <a href="mailto:gabriel.vieira2595@gmail.com">
            Gabriel.Vieira2595@gmail.com 
          </a>
          <a href="https://wa.me/5511986431855">
            (55) 11 9 8643-1855
          </a>
        </div>
         
    </div>
  );
}
