import React from "react";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
// import Testimonials from "./sections/testimonials/Testimonials";
// import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
// import Modal from "./components/Modal";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import Gita from "./sections/gita/Gita";

const App = () => {
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Gita />
      {/* <Testimonials /> */}
      {/* <FAQs /> */}
      <Contact />
      <Footer />
      {/* <Modal/>  */}
      <Theme />
      <FloatingNav />
    </main>
  );
};

export default App;
