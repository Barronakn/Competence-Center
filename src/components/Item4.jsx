import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Item4 = () => {
  const items = [
    {
      id: 0,
      img: "./img1.png",
      title: "Cours de graphisme",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 1,
      img: "./img2.png",
      title: "Cours de conception d'illustrations",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 2,
      img: "./img3.png",
      title: "Cours de conception UI/UX",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 3,
      img: "./img4.png",
      title: "Cours de développement Web",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 4,
      img: "./img1.png",
      title: "Cours de graphisme",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 5,
      img: "./img2.png",
      title: "Cours de conception d'illustrations",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 6,
      img: "./img3.png",
      title: "Cours de conception UI/UX",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
    {
      id: 7,
      img: "./img4.png",
      title: "Cours de développement Web",
      notes: "./etoiles.png",
      price: 199.99,
      icon: "./people.png",
      nbrs: "Plus de 25 000 étudiants",
    },
  ];

  return (
    <div className="item-4 mt-20 w-full overflow-hidden">
      <div className="title text-center mt-40">
        <h1 className="text-5xl auto titre line text-bold">
          Nos cours populaires
        </h1>
        <p className="text-xl text-gray-600 auto w42 font-bold font-primary">
          Accord de non-divulgation seed round influenceur de l'accélérateur de
          seed money.
        </p>
      </div>
      <div className="pagination container mt-24 flex">
        {items.map((item) => {
          return <ItemList key={item.id} {...item} />;
        })}
      </div>

      <div className="arrow flex justify-between">
        <div className="arrowLeft w-14 h-14 ml-1 text-primary cursor p-3 shadow-btn  pt-4">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="arrowRight  w-14 h-14 ml-1 text-primary cursor p-3 shadow-btn  pt-4 m-0">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Item4;
