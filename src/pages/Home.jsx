import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Page } from "../components/Page";
import { Experience } from "../components/Certificações";
import { Skills } from "../components/Skills";

export function Home() {
  return (

    
    <div className="h-min[100%]">
      <div className="h-min[100%]">
      <Header/>
      </div>
      <Page />
      <div className=" mt-48 h-min[100%]  bg-gray-100">
        <AboutMe />
      </div>
      <div className="h-[850px] bg-gray-900">
        <Experience  />
      </div>
      <div className="h-min[100%]  bg-white" >
        <Skills />
      </div>
      <div className="h-screen bg-black-700 ">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
