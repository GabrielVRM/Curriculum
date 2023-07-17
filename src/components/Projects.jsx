

export const listImageLenguagens = [
 { 
  
   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" ,
   alt: "Rafa-Js",
 },
 
 {
   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
   alt: "Rafa-React",
 },
 {
   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
   alt: "Rafa-HTML",
 },

 {
   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
   alt: "Rafa-CSS",
 },

 {
   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
   alt: "Rafa-CSS",
 },
 {
   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
   alt: "Rafa-CSS",
 },
 
 {
   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
   alt: "Rafa-CSS",
 },
 {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    alt:"Node"
 },
{
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    alt:"GitHub"
}

];
export function Projects() {



  

  return (
    <div className="p-10 w-full h-full sm:overflow-hidden">
      <div className="flex justify-center text-3xl mt-">
        <span className="text-rose-400 tracking-widest">Projetos</span>
      </div>
<div className='flex justify-center w-full h-16 mt-10 gap-10'>
{listImage.map((item) => (
<img className= "w-20 h-20  border rounded-full bg-white" src={`${item.img}`}/>
))}
</div>
      <div className="flex justify-center w-full">

        <div className="flex w-full justify-center gap-10   " >
        {listImageLenguagens.map((item) => (
            <img className= " mt-32 m-3 border rounded-full bg-white w-10" src={`${item.img}`} srcSet={`${item.img}`} alt={item.title} />
            ))}
            </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="mt-[40px]  border bg-black text-white rounded-full h-10 w-48 hover:bg-white hover:text-black hover:border-white">
          <a> Acesso ao Dashboard </a>
        </button>
      </div>
    </div>
  );
}
