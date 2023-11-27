import { NavLink } from "react-router-dom";
import { fetchData } from "../utils/crud";
import { useEffect, useState } from "react";

function SecondNavbar() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDataCategories = async () => {
      try {
        const data = await fetchData("post/categorie/");
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataCategories();
  }, []);

  console.log(Categories);

  return (
    <>
      <div className="dark:bg-bg-custom-gray dark:text-white text-center  rounded-lg shadow m-2 hidden md:block">
        {Categories.map((el) => (
          <ul key={el.id} className="flex flex-col justify-center fw-bold p-4">
            <p className="text-3xl text-black"></p>
            <li className="ml-2 w-100%">
              <NavLink to="">
                {" "}
                <i className="fas fa-chevron-right"></i> 
                {el.name}
              </NavLink>
            </li>

            {/* You need to do a for in categories  */}
          </ul>
        ))}
      </div>
    </>
  );
}

export default SecondNavbar;
