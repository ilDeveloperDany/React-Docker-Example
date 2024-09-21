import Navbar from "../components/Navbar";

function About(){
    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-white text-3xl text-center w-full font-medium">About</h1>
            <address className="text-white text-xl">
                Hi, my name's Daniel and I'm an italian full stack web developer! <br />
                You can discover more about me and my works looking my social media pages, like:  
                <a href="https://www.linkedin.com/in/daniel-loddo/" target="_blank" title="Linkedin profile"> Linkedin </a>  
                and <a href="https://github.com/ilDeveloperDany" target="_blank" title="Github profile">Github</a>!
            </address>
        </>
    )
}

export default About;