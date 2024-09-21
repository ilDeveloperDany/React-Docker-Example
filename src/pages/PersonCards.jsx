import Navbar from "../components/Navbar";
import PersonCard from "../components/personCard";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function PersonCards(){

    const people = useSelector((state) => state.people.value);

    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-white text-center text-3xl font-medium w-full">Person cards</h1>

            <div className="flex flex-row gap-5 flex-wrap w-full mt-10 justify-center align-middle">
                {
                    people.length > 0 ? (
                        people.map((person) => {
                            const {id, faceImg, fiscalCode, name, surname, birthDate, gender, eyesColor} = person; //destructuring
    
                            return (
                            <Link to={`/person-cards/${id}`} key={id}>
                                <PersonCard 
                                    id={id} 
                                    faceImg={faceImg} 
                                    fiscalCode={fiscalCode} 
                                    name={name} 
                                    surname={surname} 
                                    birthDate={birthDate} 
                                    gender={gender} 
                                    eyesColor={eyesColor}
                                >
        
                                </PersonCard>
                            </Link>
                            )
                        }) 
                    ) : (
                        <p className="text-white text-xl">There aren't people</p>
                    )
                    
                }
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default PersonCards;