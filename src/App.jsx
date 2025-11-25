import gsap from "gsap";
import { Draggable } from "gsap/Draggable"

import { Dock, Home, Navbar, Welcome } from "#components"
import { Finder, Resume, Terminal, Img, Text, Contact, Photos } from "#windows";

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
            <Home/>
            <Photos/>
        </main>
  )
}

export default App