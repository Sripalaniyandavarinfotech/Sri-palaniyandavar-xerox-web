import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Steps from "./components/Steps";
import About from "./components/About";
import Contact from "./components/Contact";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Steps />
        <About />
        <Contact />
        <Enquiry />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
