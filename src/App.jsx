import { Navbar, Footer } from "Components";
import { useUser } from "Components/utils";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [user] = useUser();
  return (
      <div className={`App ${user.theme}`}>
          <Navbar />
          <main >
            <Outlet/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
