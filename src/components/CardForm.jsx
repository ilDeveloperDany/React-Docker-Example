function CardForm({addCity}){

    const handleClick = (e)=>{
        e.preventDefault;
        
    }
    
    return (
        <form className="flex flex-col gap-3 mb-10 w-full justify-center align-middle">
            <legend className="text-white text-center font-semibold">Add a city card!</legend>
            <input type="text" name="title" id="title" placeholder="City name" />
            <input type="text" name="imgSrc" id="imgSrc" placeholder="Img URL" />
            <textarea name="description" id="description" placeholder="A short description"></textarea>
            <button type="submit" onClick={handleClick(e)}>Add city card</button>
        </form>
    )
}

export default CardForm;