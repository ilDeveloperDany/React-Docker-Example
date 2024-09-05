function CardForm({addCity}){

    const handleClick = ()=>{
        const newCity = {
            id: 5,
            title: "Tokyo",
            imgSrc: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "",
            isVisited: false
        };
        addCity(newCity);
    }
    
    return (
        <form className="flex flex-col gap-3 mb-10 w-full justify-center align-middle">
            <legend className="text-white text-center font-semibold">Add a city card!</legend>
            <input type="text" name="title" id="title" placeholder="City name" />
            <input type="text" name="imgSrc" id="imgSrc" placeholder="Img URL" />
            <textarea name="description" id="description" placeholder="A short description"></textarea>
            <button type="button" onClick={handleClick}>Add city card</button>
        </form>
    )
}

export default CardForm;