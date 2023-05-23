import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar"
import { Table } from "./components/table";
import { Launch } from "./interfaces/launch";
import { Rocket } from "./interfaces/rocket";
import { Crew } from "./interfaces/crew";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
