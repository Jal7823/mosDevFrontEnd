import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="bg-bg-custom-yellow">
            <ul className="flex justify-center fw-bold p-4">
                <li className="ml-2"><NavLink to="postlist">Nuevos Post</NavLink></li>
                <li className="ml-2"><NavLink to="/contact">Contact</NavLink></li>
                {/* <li className="ml-2"><NavLink to="">enlace</NavLink></li> */}
                {/* <li className="ml-2"><NavLink to="">enlace</NavLink></li> */}
            </ul>
        </div>
    </>
  )
}

export default Navbar