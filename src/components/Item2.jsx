import { NavLink } from "react-router-dom";

const Item2 = () => {
  return (
    <div className="item-2 mt-20 flex justify-between">
      <div className="left w56">
        <img src="./section-2.png" alt="" />
      </div>
      <div className="right w42 ml-16 mt-16">
        <h1 className="text-5xl line text-bold">
          Plus d'un million d'étudiants obtenir son travail
        </h1>
        <p className="font-primary mt-6 text-semibold text-xl">
          Accord de non-divulgation seed round influenceur de l'accélérateur de
          seed money. Le piratage de la croissance revient sans hésiter.
        </p>
        <p className="font-primary mt-6 text-semibold text-xl">
          Accord de non-divulgation seed round influenceur de l'accélérateur de
          seed money.
        </p>
        <div className="mt-10">
          <NavLink
            className=" btn rounded cursor px-12 py-4 font-semibold"
            to="#"
          >
            Explore plus
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Item2;
