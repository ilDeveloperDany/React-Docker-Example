import './Navbar.css'
import NavbarLink from './NavbarLink'

function Navbar() {
    return (
        <ul className='flex flex-row justify-evenly w-full mb-5'>
            <li>
                <NavbarLink>Pagina 1</NavbarLink>
            </li>
            <li>
                <NavbarLink>Pagina 2</NavbarLink>
            </li>
            <li>
                <NavbarLink>Pagina 3</NavbarLink>
            </li>
        </ul>
    )
}

export default Navbar