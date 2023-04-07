import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Item1 from "../components/Item1";
import Item2 from "../components/Item2";
import Item3 from "../components/Item3";
import Item4 from "../components/Item4";
import Item5 from "../components/Item5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const componentName = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="mx-20 home">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
        >
          <Navigation />
        </motion.div>
        <Item1 />
        <div data-aos="fade-up">
          <Item2 />
        </div>
        <Item3 />
        <div data-aos="fade-up">
          <Item4 show={3} />
        </div>
        <div data-aos="fade-up">
          <Item5 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default componentName;
