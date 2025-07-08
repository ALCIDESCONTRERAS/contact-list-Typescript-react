import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
