import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CardPage(){
    const { cityID } = useParams();

    console.log(cityID);

    const cities = useSelector((state) => 
        state.cities.value.filter((city) => city.id == cityID.toString())
    );

    console.log(cities[0]);

    const {imgSrc, title, description, isVisited} = cities[0];

    return (
        <>
            <Navbar></Navbar>
            <div className="w-full flex align-middle justify-center">
                <img className="h-[200px] w-full object-cover" src={imgSrc} alt="" />
                <div className="p-3">
                    <h3 className="text-white text-center font-semibold text-2xl mb-3">{title}</h3>
                    <p className="text-gray-300 text-start">{description}</p>
                    {isVisited && <span className="mt-2 block text-gray-300">✔ Visitata</span>}
                    {!isVisited && <span className="mt-2 block text-gray-300">❌ Non visitata</span>}
                </div>
            </div>
        </>
    )
}

export default CardPage;