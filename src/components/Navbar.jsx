import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul className='flex flex-row justify-center w-full mb-5 gap-10'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contacts'}>Contacts</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/city-cards'}>City cards</Link>
            </li>
            <li>
                <Link to={'/person-cards'}>Person cards</Link>
            </li>
        </ul>
    )
}

export default Navbar