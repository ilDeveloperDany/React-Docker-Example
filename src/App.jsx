import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CardForm from './components/CardForm'
import PersonForm from './components/PersonForm'
import Count from './components/Count'
import useCounter from './hooks/useCounter'

function App() {

const [posts, setPost] = useState([]);

  /* TEST USE EFFECT */

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/') //HTTP request using fetch
          .then((response)=>response.json())
          .then((data)=>setPost(data)) //result: array of objects
          .catch((error) => console.error("Error fetching posts:", error));
  }, [])

  useCounter();

  return (
    <>
      <Navbar></Navbar>

      <Count></Count>

      <CardForm></CardForm>

      <h2 className="text-white align-center font-medium text-2xl mb-5">Person form</h2>
      <PersonForm></PersonForm>

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
