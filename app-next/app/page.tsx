import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Engineering } from "@/components/sections/engineering";
import { OpenSource } from "@/components/sections/open-source";
import { Expertise } from "@/components/sections/expertise";
import { Contact } from "@/components/sections/contact";
import { StartupScreen } from "@/components/startup-screen";

export default function Home() {
  return (
    <>
      <StartupScreen />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Engineering />
      <OpenSource />
      <Expertise />
      <Contact />
    </>
  );
}
