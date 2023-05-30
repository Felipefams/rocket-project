import { DataProvider } from "./components/contexts/dataContext";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar"
import { Outlet } from "react-router-dom";




function App() {
  return (
    <>
      <Navbar />
      <DataProvider>
        <Outlet />
      </DataProvider>
      <Footer />
    </>
  )
}

export default App
