import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Item4 = ({ show }) => {
  const items = [
    {
      id: 0,
      img: "./img1.png",
      title: "Cours de graphisme.",
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
  ];

  const [start, setStart] = useState(0);

  const next = start + show;
  const newShow = items.slice(start, next);
  const pageCount = Math.ceil(items.length / show);

  const handlePageClick = (e) => {
    setStart((e.selected * show) % items.length);
  };

  return (
    <div className="item-4 mt-20 w-full ">
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
        {newShow &&
          newShow.map((item) => {
            return <ItemList key={item.id} {...item} />;
          })}
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Item4;
