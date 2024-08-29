import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardForm from './components/CardForm'

function App() {

  
//CARD CITY STATE
const addCity = (newCity)=>{
  setCities([...App, newCity]);
}

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

  /* TRYING STATE */
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1,2,3]);

  const addItem = ()=>{
    console.log("Items: "+items);
    const newItem = items.length+1; //the last item increased by 1
    console.log("New item: "+newItem);
    setItems([...items, newItem]); // ... spread operator
  }

  function handleClick() {
    addItem();
    alert("Click! Added 1 item!");
  }

  return (
    <>
      <Navbar></Navbar>
      <CardForm addCity={addCity}></CardForm>
      <div className="flex flex-row gap-5 flex-wrap w-full">
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>
          Aggiungi item allo stato
        </button>
      </div>
    </>
  )
}

export default App
