
const Item5 = () => {
    return (
      <div className="item-5 pt-32 flex justify-between">
        <div className="imgContact1 w-3/5">
          <img src="./contact-1.png" alt="" />
        </div>
        <div className="form-bg flex justify-around">
          <div className="title text-center mt-40">
            <h1 className="text-5xl auto line text-bold">
              Avez-vous une question?
            </h1>
            <p className="text-xl text-gray-600 auto font-bold font-primary">
              Graine d'accord de non-divulgation.
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
          <div className="imgContact2 width">
            <img src="./contact-2.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Item5;