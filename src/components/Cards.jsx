import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


function Cards({ id, image, title, content, author, created_at, link }) {

  Cards.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  
  const maxLength = 200;

  const truncatedContent = content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content;

  return (
    <>
      <div className="container">
        <div className="flex">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NavLink to={`/details/${id}`}>
              <img className="rounded-t-lg" src={image} alt={title} />
            </NavLink>
            <div className="p-5">
              <NavLink to={`/details/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
              </NavLink>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
              </p>
              <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">{author}</p>
              <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">{created_at}</p>
              <NavLink to={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">
                Ver más
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
