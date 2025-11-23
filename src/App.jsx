import { Dock, Navbar, Welcome } from "#components"
import React from "react"

const App = () => {
  return(
        <main>
            <Navbar />
            <Welcome />
             <Dock />
        </main>
  )
}

export default App