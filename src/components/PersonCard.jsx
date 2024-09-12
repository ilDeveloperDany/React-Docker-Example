import { useState } from "react";

function PersonCard({id, faceImg, fiscalCode, name, surname, birthDate, gender, eyesColor}){
    return (
        <div className="flex flex-col justify-center align-middle">
            <img src={faceImg} alt={`Immagine utente ${id}: ${name} ${surname}`} className="text-white w-[300px] h-[300px] object-cover"/>
            <p className="text-white text-left w-fit"><span className="font-bold">Fiscal code:</span> {fiscalCode}</p>
            <p className="text-white text-left w-fit"><span className="font-bold">Name:</span> {name}</p>
            <p className="text-white text-left w-fit"><span className="font-bold">Surname:</span> {surname}</p>
            <p className="text-white text-left w-fit"><span className="font-bold">Birth date:</span> {birthDate}</p>
            <p className="text-white text-left w-fit"><span className="font-bold">Gender:</span> {gender}</p>
            <p className="text-white text-left w-fit"><span className="font-bold">Color of the eyes:</span> {eyesColor}</p>
        </div>
    )
}

export default PersonCard;