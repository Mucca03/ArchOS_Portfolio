import gsap from "gsap";
import { Draggable } from "gsap/Draggable"

import { Dock, Navbar, Welcome } from "#components"
import { Finder, Resume, Terminal, Img, Text, Contact } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return(
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal/>
            <Resume/>
            <Finder/>
            <Img/>
            
            <Text/>
            <Contact/>
        </main>
  )
}

export default App