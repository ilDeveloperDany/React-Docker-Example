import { useState } from 'react';
import {increment, decrement, incrementByAmount, decrementByAmount} from '../redux/counterSlice'
import {useSelector, useDispatch} from 'react-redux'

function Count(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    /* FORMDATA STATE MANAGEMENT */

    const [formData, setFormData] = useState({
        number: '',
        action: 'increment'
    })

    const handleChange = (e)=>{
        let {name, value, type} = e.target;
        if (type == 'number')
            value = Number(value); //converting string in number
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        /* TEST DONE WITHOUT FORMDATA STATE
        const inputNumber = document.querySelector('#number');
        const amount = inputNumber.value;
        const action = document.querySelector('#actionSelect').value;
        */

        const amount = formData.number;
        const action = formData.action;

        switch(action){
            case 'increment': dispatch(incrementByAmount(amount)); break;
            case 'decrement': dispatch(decrementByAmount(amount)); break;
            default: null;
        }

        setFormData({...formData, number: ''}); //resetting form amount number
    }

    return (
        <div className='my-5'>
            <p className="mb-3 text-white">Count: {count}</p>
            <button className='mr-3' aria-label='Increment value' onClick={() => {dispatch(increment())}}>
                Increment +
            </button>
            <button aria-label='Decrement value' onClick={() => {dispatch(decrement())}}>
                Decrement -
            </button>
            <form onSubmit={handleSubmit}>
                <input type="number" name="number" placeholder='Number' id="number" value={formData.number} onChange={handleChange}/>
                <select name="action" id="action" value={formData.action} onChange={handleChange}>
                    <option value="increment">Increment by amount</option>
                    <option value="decrement">Decrement by amount</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Count;