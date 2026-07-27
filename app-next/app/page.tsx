import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { OpenSource } from "@/components/sections/open-source";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { StartupScreen } from "@/components/startup-screen";

export default function Home() {
  return (
    <>
      <StartupScreen />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <OpenSource />
      <Services />
      <Contact />
    </>
  );
}
