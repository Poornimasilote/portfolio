import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Cloud from "./sections/Cloud/Cloud";
import Contact from "./sections/Contact/Contact";
import Designer from "./sections/Designer/Designer";
import Developer from "./sections/Developer/Developer";
import Home from "./sections/Home/Home";
import Startup from "./sections/Startup/Startup";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Developer/>
      <Cloud/>
      <Designer/>
      <Startup/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
