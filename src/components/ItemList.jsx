const ItemList = ({ img, title, notes, price, icon, nbrs }) => {
  return (
    <div className="item m-6 svg-input p-4 cursor">
      <img id="img" src={img} alt="" />
      <h1 className="mt-10 titre text-lg font-bold">{title}</h1>
      <div className="flex text-primary py-10 justify-between">
        <img className="w-20 h-5" src={notes} alt="" />
        <p>{price} $</p>
      </div>
      <span className="flex text-gray-700 text-sm">
        <img className="w-4 icon-people" src={icon} alt="" />
        <p>{nbrs}</p>
      </span>
    </div>
  );
};

export default ItemList;
