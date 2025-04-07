import { Header } from "../components/Header";
import { SectionTop } from "../components/SectionTop";
// import { Timeline } from "../components/section-laboral";
import { Timeline } from "../components/Section-laboral";
import { SectionProject } from "../components/Section-project";
import { Study } from "../components/Section-Study";
import { AboutMe } from "../components/Section-AboutMe";
import { Ability } from "../components/Section-Ability";

export function Landing(){

    return(
        <>
        <div>
            <SectionTop/>
            <Timeline/>
            <SectionProject/>
            <Ability/>
            <Study/>
            <AboutMe/>
        </div>
        </>
    );
}