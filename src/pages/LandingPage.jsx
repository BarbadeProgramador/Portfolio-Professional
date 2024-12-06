import { Header } from "../components/Header";
import { SectionTop } from "../components/SectionTop";
import { Timeline } from "../components/section-laboral";
import { SectionProject } from "../components/Section-project";
import { Study } from "../components/Section-Study";
import { AboutMe } from "../components/Section-AboutMe";

export function Landing(){

    return(
        <>
        <div>
            <Header/>
            <SectionTop/>
            <Timeline/>
            <SectionProject/>
            <Study/>
            <AboutMe/>
        </div>
        </>
    );
}