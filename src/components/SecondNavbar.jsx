import {NavLink} from 'react-router-dom'

function SecondNavbar() {
  return (
    <>
        <div className="bg-bg-customyellow">
            <ul className="flex justify-center fw-bold p-4">
                <li className="ml-2"><NavLink to="">Tech</NavLink></li>
                <li className="ml-2"><NavLink to="">enlace</NavLink></li>
                <li className="ml-2"><NavLink to="">enlace</NavLink></li>
                <li className="ml-2"><NavLink to="">enlace</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default SecondNavbar