import { useState, useEffect, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardForm from './components/CardForm'
import PersonForm from './components/PersonForm'
import PersonCard from './components/personCard'
import TestContext from './stores/TestContext'
import ContextTest from './components/ContextTest'

function App() {

const [cities, setCities] = useState([
  {
    id: 1,
    title: "San Francisco",
    imgSrc: "https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "",
    isVisited: false
  },
  {
    id: 2, 
    title: "Cagliari",
    imgSrc: "https://images.unsplash.com/photo-1591792381642-a088238757f7?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "",
    isVisited: true
  },
  {
    id: 3,
    title: "Berlino",
    imgSrc: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "",
    isVisited: false
  },
  {
    id: 4,
    title: "Londra",
    imgSrc: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "",
    isVisited: false
  }
])

//CARD CITY STATE
const addCity = (newCity)=>{
  setCities([...cities, newCity]);
}

const [people, setPerson] = useState([]);

const addPerson = (newPerson) => {
  setPerson([...people, newPerson]);
}

const [posts, setPost] = useState([]);

  /* TEST USE EFFECT */

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/') //HTTP request using fetch
          .then((response)=>response.json())
          .then((data)=>setPost(data)); //result: array of objects
  }, [])

  /* useReducer EXAMPLE */
  function formReducer (state, action){
    switch(action.type) {
      case "CHANGE_FIELD": 
        return {...state, [action.field]: action.value};
      case "RESET_FORM":
        return {name: "", email: ""};
      default:
        return state;
      
    }

  }

  const [formData, dispatchFormData] = useReducer(formReducer, {name: '', email: ''})
  
  const handleChange = (field, value) => {
    dispatchFormData({type: "CHANGE_FIELD", field, value})
  }

  const resetForm = () => {
    dispatchFormData({type: "RESET_FORM"})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  }


  //COUNT FOR CONTEXT
  const [count, setCount] = useState(0);

  return (
    <TestContext.Provider value={{count, setCount}}>
      <ContextTest></ContextTest>
      <Navbar></Navbar>

      <h2 className="text-white align-center font-medium text-2xl mb-5">City cards</h2>
      <CardForm addCity={addCity}></CardForm>
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
      <PersonForm addPerson={addPerson}></PersonForm>
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

      <form action="" onSubmit={handleSubmit}>
        <legend className="text-white text-center font-semibold">Name and email form!</legend>
        <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={(e)=>{handleChange("name", e.target.value)}}/>
        <input type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={(e)=>{handleChange("email", e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>

      <h2 className="text-white text-center font-medium text-2xl mb-5">Posts from API</h2>
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
    </TestContext.Provider>
  )
}

export default App
