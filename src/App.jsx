import { Stack } from "@mui/material"

import "./App.css"
import HeroBanner from "./components/HeroBanner"
import Nav from "./components/Nav"
import Footer from "./components/Fooeter"

function App() {
  return (
    <Stack width="100%" bgcolor="green" alignItems="center">
      <HeroBanner />
      <Nav></Nav>
      <Footer></Footer>
    </Stack>
  )
}

export default App
