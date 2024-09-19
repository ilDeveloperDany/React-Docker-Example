import { useEffect, useState, useRef } from "react";
import { capitalizeFirstLetter } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/peopleSlice";

function personForm(){

    const dispatch = useDispatch();
    const people = useSelector((state) => state.people.value);
    const fileInputRef = useRef(null);

    /* STATE FUNCTIONS & HANDLE FUNCTIONS */

    const [formData, setFormData] = useState({
        id: Math.random(),
        faceImg: "",
        fiscalCode: "",
        name: "",
        surname: "",
        birthDate: "",
        gender: "male",
        eyesColor: "brown"
    })

    function handleChange(e){
        const {name, type, value, checked} = e.target; //destructuring
        if(type == "file") 
            setFormData({...formData, faceImg: URL.createObjectURL(e.target.files[0])})
        else setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();

        const newPerson = {
            id: formData.id,
            faceImg: formData.faceImg,
            fiscalCode: formData.fiscalCode.toUpperCase(),
            name: capitalizeFirstLetter(formData.name),
            surname: capitalizeFirstLetter(formData.surname),
            birthDate: formData.birthDate,
            gender: formData.gender, 
            eyesColor: formData.eyesColor
        };

        dispatch(add(newPerson));

        localStorage.setItem("Person key", formData.id) // SETTING AN ITEM IN THE BROWSER LOCAL STORAGE, LIKE A COOKIE

            // Reset file input using ref
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        setFormData({ //reset formData after submitted
            id: Math.random(),
            faceImg: "",
            fiscalCode: "",
            name: "",
            surname: "",
            birthDate: "",
            gender: "male",
            eyesColor: "brown"
        })
    }

        /* TEST USE EFFECT */

        useEffect(()=>{
            console.log(people);
        }, [people]) // (dependencies) only start: [], everytime that one or more states are updated: [state1, state2, ...]

    return (
        <div className="flex align-middle justify-center">
            <form action="" onSubmit={handleSubmit} className="w-[400px] flex flex-col justify-center align-middle gap-2">
                <label htmlFor="faceImg" className="text-white">Image of your face:</label>
                <input type="file" name="faceImg" id="faceImg" className="text-white" onChange={handleChange} ref={fileInputRef}/>
                <input type="text" name="fiscalCode" id="fiscalCode" placeholder="Fiscal code" onChange={handleChange}/>
                <fieldset className="grid grid-cols-2 gap-2">
                    <input type="text" name="name" id="name" className="col" placeholder="Name" onChange={handleChange} value={formData.name}/>
                    <input type="text" name="surname" id="surname" className="col" placeholder="Surname" onChange={handleChange} value={formData.surname}/>
                </fieldset>
                <input type="date" name="birthDate" id="birthDate" placeholder="Birth date" onChange={handleChange} value={formData.birthDate}/>
                <fieldset className="flex flex-col gap-1">
                    <legend className="mb-2 text-white font-medium">Your gender:</legend>
                    <label htmlFor="male" className="text-white">Male</label>
                    <input type="radio" name="gender" id="male" value="male" onChange={handleChange} checked={formData.gender == "male"}/>
                    <label htmlFor="Female" className="text-white">Female</label>
                    <input type="radio" name="gender" id="female" value="female" onChange={handleChange} checked={formData.gender == "female"}/>
                    <label htmlFor="other" className="text-white">Other</label>
                    <input type="radio" name="gender" id="other" value="other" onChange={handleChange} checked={formData.gender == "other"}/>
                </fieldset>
                <fieldset className="">
                    <legend className="mb-2 text-white font-medium">Your physical characteristics:</legend>
                    <label htmlFor="male" className="me-2 text-white">Color of the eyes:</label>
                    <select name="eyesColor" id="eyesColor" onChange={handleChange} value={formData.eyesColor}>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="brown">Brown</option>
                        <option value="black">Black</option>
                        <option value="gray">Gray</option>
                    </select>
                </fieldset>
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default personForm;