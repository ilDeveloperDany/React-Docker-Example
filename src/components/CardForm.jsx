import { useState } from "react";

function CardForm({addCity}){

    const [formData, setFormData] = useState({
        id: 5,
        title: "",
        imgSrc: "",
        description: "",
        isVisited: false
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newCity = {
            id: Math.random(),
            title: formData.title,
            imgSrc: formData.imgSrc,
            description: formData.description,
            isVisited: formData.isVisited
        };
        addCity(newCity);
    }

    const changeHandler = (e) => {
        const {name, value, type, checked} = e.target;
        const inputValue = type == "checkbox" ? checked : value; //if type == checkbox, take checked, else value
        setFormData({
            ...formData,
            [name]: inputValue //overwrites the property called ‘name’, the input attribute value
        })
        console.log(formData);
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-10 w-full justify-center align-middle">
            <legend className="text-white text-center font-semibold">Add a city card!</legend>
            <input type="text" name="title" id="title" placeholder="City name" defaultValue={formData.title} onChange={changeHandler}/>
            <input type="text" name="imgSrc" id="imgSrc" placeholder="Img URL" defaultValue={formData.imgSrc} onChange={changeHandler}/>
            <textarea name="description" id="description" placeholder="A short description" defaultValue={formData.description} onChange={changeHandler}></textarea>
            <label htmlFor="isVisited">Is it visited?</label>
            <input type="checkbox" name="isVisited" id="isVisited" defaultChecked={formData.isVisited} onChange={changeHandler}/>
            <button type="submit">Add city card</button>
        </form>
    )
}

export default CardForm;