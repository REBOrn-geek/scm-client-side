import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="m-0 p-0 g-0 bg-light">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;