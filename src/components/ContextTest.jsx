import { useState, useEffect, useContext } from "react";
import TestContext from "../stores/TestContext";

function ContextTest(){
    const {count, setCount} = useContext(TestContext); //using context to access to the count state
    console.log(count);

    return (
        <div className="mb-5">
            <p className="text-white">Count: {count}</p>
            <button onClick={(e)=>{setCount(count + 1)}}>Increase</button>
        </div>
    )
}

export default ContextTest;