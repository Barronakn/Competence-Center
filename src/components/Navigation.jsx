import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="content flex justify-between mt-7">
      <div className="logo">
        <NavLink to="/Competence-Center" className="cursor">
          <img src="./logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="d-flex none">
        <div className="nav">
          <ul className="d-flex gap-20">
            <li>
              <NavLink className="cursor" to="/about">
                À propos de nous
              </NavLink>
            </li>
            <li>
              <NavLink className="cursor" to="/cours">
                Cours
              </NavLink>
            </li>
            <li>
              <NavLink className="cursor" to="/ressources">
                Ressources
              </NavLink>
            </li>
            <li>
              <NavLink className="cursor" to="/learn">
                Apprentissage en ligne
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn rounded cursor ml-14 px-12 py-2">
          <NavLink to="#">Connexion</NavLink>
        </div>
      </div>
      {show ? (
        <div
          data-aos="fade-down"
          className="nav-resp w-full bg-primary py-10 z-auto"
        >
          <ul className="pt-5">
            <li className="py-2 text-white">
              <NavLink className="cursor" to="/about">
                À propos de nous
              </NavLink>
            </li>
            <li className="py-2 text-white">
              <NavLink className="cursor" to="/cours">
                Cours
              </NavLink>
            </li>
            <li className="py-2 text-white">
              <NavLink className="cursor" to="/ressources">
                Ressources
              </NavLink>
            </li>
            <li className="py-2 text-white">
              <NavLink className="cursor" to="/learn">
                Apprentissage en ligne
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
      <svg
        className="iconMenu w-14 h-10"
        onClick={handleShow}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default Navigation;
