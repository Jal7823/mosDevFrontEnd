import { NavLink } from "react-router-dom";

function Head() {
  return (
    <div>
      <div className="p-4 text-center bg-white dark:text-white dark:bg-bg-custom-gray flex justify-center ">
        <NavLink to="/">
          <img
            className="m-auto "
            style={{ width: "40px", height: "auto" }}
            src="public/logo.svg"
            alt="Mos Dev"
          />
        </NavLink>
        <h2 className="md:text-6xl ml-4">Bienvenido a <span className="text-bg-custom-red">MosDev</span></h2>
      </div>
    </div>
  );
}

export default Head;
