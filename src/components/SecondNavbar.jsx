import {NavLink} from 'react-router-dom'
import fetchData from '../utils/crud'
import { useEffect, useState } from 'react'


function SecondNavbar() {

  const [Categories, setCategories] = useState([])

  useEffect(() => {
    const fetchDataCategories = async () => {
      try {
        const data = await fetchData('post/categorie/');
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
        <div className="dark:bg-bg-custumgray dark:text-white text-center border border-gray-200 rounded-lg shadow m-2 hidden md:block">
            <ul className="flex flex-col justify-center fw-bold p-4">
                <li className="ml-2 w-100%"><NavLink to="">Tech</NavLink></li>
                <li className="ml-2 w-100%"><NavLink to="">enlace</NavLink></li>
                <li className="ml-2 w-100%"><NavLink to="">enlace</NavLink></li>
                <li className="ml-2 w-100%"><NavLink to="">enlace</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default SecondNavbar