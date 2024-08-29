import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function handleChange(e) {
  console.log(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

//OBJECT ARRAY
const cities = [
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
]

function App() {
  /* TRYING STATE */
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Daniel");
  const [items, setItems] = useState([1,2,3]);
  const [user, setUser] = useState({name: "Dany", email: "dani.loddo@mail.it"});

  const addItem = ()=>{
    console.log("Items: "+items);
    const newItem = items.length+1; //the last item increased by 1
    console.log("New item: "+newItem);
    setItems([...items, newItem]); // ... spread operator
  }

  const setUserName = ()=>{
    const updatedUser = {...user, name: "Daniel"};
    setUser(updatedUser);
  }

  function handleClick() {
    addItem();
    alert("Click! Added 1 item!");
  }

  return (
    <>
      <Navbar>

      </Navbar>
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
        <form action="" onSubmit={handleSubmit}>
          <button type="submit">
            Invia
          </button>
        </form>
        <input type="text" name="testo" id="testo" onChange={handleChange}/>
      </div>
    </>
  )
}

export default App
