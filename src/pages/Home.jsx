import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Page } from "../components/Page";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";

export function Home() {
  return (

    
    <div className="h-[520vh]">
      <div className="h-[3%]">
      <Header/>
      </div>
      <Page />
      <div className=" mt-48 h-[22%] sm:h-[16%] bg-gray-100">
        <AboutMe />
      </div>
      <div className="h-[16%] sm:h-[10%] bg-black" >
        <Experience />
      </div>
      <div className="h-[50%] sm:h-[60%] bg-white" >
        <Skills />
      </div>
      <div className="h-[12%] bg-black-700 sm:h-[10%] ">
        <Contact />
      </div>
      <div className=" bg-white h-auto sm:h-[8%]">
        <Footer />
      </div>
    </div>
  );
}
