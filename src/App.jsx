import { useState, useEffect, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardForm from './components/CardForm'
import PersonForm from './components/PersonForm'
import PersonCard from './components/personCard'
import { useSelector } from 'react-redux'
import Count from './components/Count'

function App() {

const [posts, setPost] = useState([]);

  /* TEST USE EFFECT */

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/') //HTTP request using fetch
          .then((response)=>response.json())
          .then((data)=>setPost(data)); //result: array of objects
  }, [])

  const cities = useSelector((state) => state.cities.value);
  const people = useSelector((state) => state.people.value);

  return (
    <>
      <Navbar></Navbar>

      <Count></Count>

      <h2 className="text-white align-center font-medium text-2xl mb-5">City cards</h2>
      <CardForm></CardForm>
      <div className="flex flex-row gap-5 flex-wrap w-full mb-5">
        {cities
          .filter((city)=>!city.isVisited)
          .map((city)=>(
            <Card
              key={city.id}
              isVisited={city.isVisited} 
              title={city.title} 
              imgSrc={city.imgSrc}>
                {city.description}
            </Card>
          ))
        }
      </div>

      <h2 className="text-white align-center font-medium text-2xl mb-5">Person cards</h2>
      <PersonForm></PersonForm>
      <div className="flex flex-row gap-5 flex-wrap w-full mt-10 justify-center align-middle">
        {people
          .map((person)=>(
            <PersonCard
              key={person.id}
              id={person.id}
              faceImg={person.faceImg}
              fiscalCode={person.fiscalCode}
              name={person.name}
              surname={person.surname}
              birthDate={person.birthDate}
              gender={person.gender}
              eyesColor={person.eyesColor}
            >
            </PersonCard>
          ))
        }
      </div>

      <h2 className="text-white text-center font-medium text-2xl my-5">Posts from API</h2>
      <div className="flex flex-row gap-5 flex-wrap w-full justify-center">
        {posts
          .map((post)=>(
            <div key={post.id} className="rounded bg-slate-700">
              <p className="text-white"><span className="font-bold">User id:</span> {post.userId}</p>
              <p className="text-white font-bold text-xl">{post.title}</p>
              <p className="text-white">{post.body}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
