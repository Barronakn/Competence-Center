import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Item1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="item-1 mt-24 flex justify-around">
      <div data-aos="fade-up">
        <div className="left w-9/12">
          <h2 className="text-primary text-2xl">Grandissez-vous avec nous</h2>
          <h1 className="text-7xl mt-6 item-t font-sans">
            Développez vos compétences et obtenir la classe mondiale emplois
          </h1>
          <p className="text-gray-600 mt-10 text-xl font-primary">
            Accord de non-divulgation seed round influenceur de l'accélérateur
            de seed money. Le piratage de la croissance renvoie une graine
            d'accord non dis sûr autour d'une graine.
          </p>
          <form className="mt-10 flex" action="">
            <div className="svg-input w-full h-14 p-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                type="search"
                name="search"
                placeholder="Rechercher le titre du cours"
                className="w-full"
              />
            </div>
            <input
              className="btn h-14 rounded text-lg font-bold cursor px-14 py-4"
              type="submit"
              value="Recherche"
            />
          </form>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="right mt-10">
          <img src="./section-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Item1;
