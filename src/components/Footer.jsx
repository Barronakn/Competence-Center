import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer bg-gray-800 pt-20  w-full">
      <div className="footer-top flex justify-around">
        <div className="w-4/12 footer-head">
          <div className="logo w-4/12">
            <NavLink to="/" className="cursor">
              <img src="./footer.png" alt="Logo" />
            </NavLink>
          </div>
          <p className="text-white font-semibold py-3 text-xl w-11/12 font-primary">
            Accord de non-divulgation seed round influenceur de l'accélérateur
            de seed money. Le piratage de la croissance renvoie un accord non
            dis sûr.
          </p>
        </div>
        <div className="footer-link flex">
          <div data-aos="fade-up">
            <div className="flex link flex-col pr-5">
              <h1 className="text-white pb-2 text-xl font-primary">
                À propos du produit
              </h1>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                Correctif
              </NavLink>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                Mises à jour
              </NavLink>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                Test beta
              </NavLink>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                Produit de tarification
              </NavLink>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex link flex-col pr-5">
              <h1 className="text-white pb-2 text-xl font-primary">
                Aide et solutions
              </h1>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                Parlez au support
              </NavLink>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                Documents d'assistance
              </NavLink>
              <NavLink
                className="text-gray-400 py-3 hover:text-gray-500"
                to="#"
              >
                État du système
              </NavLink>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col">
              <h1 className="text-white pb-2 text-xl font-primary">Soutien</h1>
              <NavLink
                className=" py-3 text-gray-400 hover:text-gray-500"
                to="#"
              >
                Centre d'aide
              </NavLink>
              <NavLink
                className=" py-3 text-gray-400 hover:text-gray-500"
                to="#"
              >
                Information sur le compte
              </NavLink>
              <NavLink
                className=" py-3 text-gray-400 hover:text-gray-500"
                to="#"
              >
                À propos
              </NavLink>
              <NavLink
                className=" py-3 text-gray-400 hover:text-gray-500"
                to="#"
              >
                Contactez-nous
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom px-10 text-xl py-10 flex justify-between">
        <p className="text-gray-400">© centre de compétences, 2022</p>
        <div className="flex">
          <NavLink className="text-gray-400 pr-2 hover:text-gray-500" to="#">
            Termes et conditions
          </NavLink>
          <sup className="text-2xl text-gray-400"> . </sup>
          <NavLink className="text-gray-400 pl-2 hover:text-gray-500" to="#">
            Politique de confidentialité
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
