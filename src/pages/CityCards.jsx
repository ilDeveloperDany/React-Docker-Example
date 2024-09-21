import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function CityCards(){

    const cities = useSelector((state) => state.cities.value);
    console.log(cities);

    return (
        <>
            <Navbar></Navbar>

            <h1 className="text-white align-center font-medium text-3xl mb-5">City cards</h1>

            <div className="flex flex-row gap-5 flex-wrap w-full mb-5">
                {cities
                .map((city)=>(
                    <Link to={`/city-cards/${city.id}`} key={city.id}>
                        <Card
                            isVisited={city.isVisited} 
                            title={city.title} 
                            imgSrc={city.imgSrc}
                        >
                        {city.description}
                        </Card>
                    </Link>
                ))
                }
            </div>
        </>
    )
}

export default CityCards;