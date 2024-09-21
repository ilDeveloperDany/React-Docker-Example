import Navbar from "../components/Navbar"

function Contacts(){
    return (
        <>
            <Navbar>
            </Navbar>
            <h1 className="text-white text-3xl text-center w-full font-medium">Contacts</h1>
            <address className="text-white text-xl">
                E-mail address: <a href="mailto:ildeveloperdany@gmail.com">ildeveloperdany@gmail.com</a>
            </address>
        </>
    )
}

export default Contacts;