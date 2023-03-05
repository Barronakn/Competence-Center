import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Item3 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="item-3 mt-20">
      <div className="title text-center mt-40" data-aos="fade-up">
        <h1 className="text-5xl auto titre line text-bold">
          Comment ça fonctionne
        </h1>
        <p className="text-xl text-gray-600 auto w42 font-bold font-primary">
          Accord de non-divulgation seed round influenceur de l'accélérateur de
          seed money.
        </p>
      </div>
      <div className="position mt-20 flex">
        <div className="left">
          <div
            data-aos="fade-up"
            className="left_1 p-8 rounded-md bg-white box-shadow"
          >
            <h1 className="text-3xl font-bold">Sélectionnez un cours</h1>
            <p className="text-xl mt-4 text-gray-600 font-bold font-primary">
              Accord de non-divulgation seed round influenceur de l'accélérateur
              de seed money.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="left_2 mt-8 p-8 rounded-md bg-white"
          >
            <h1 className="text-3xl font-bold">Remplissez-le et payez</h1>
            <p className="text-xl mt-4 text-gray-600  font-bold font-primary">
              Accord de non-divulgation seed round influenceur de l'accélérateur
              de seed money.
            </p>

            <h1 className="text-3xl mt-20 font-bold">
              Commencez à construire vous-même
            </h1>
            <p className="text-xl mt-4 text-gray-600  font-bold font-primary">
              Accord de non-divulgation seed round influenceur de l'accélérateur
              de seed money.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="right ml-10 mt-32">
          <img src="./section-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Item3;
