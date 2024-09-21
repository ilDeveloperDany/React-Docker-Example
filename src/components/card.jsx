function Card({title, imgSrc, isVisited, children}){
    const description = children;
    return (
        <div className="rounded bg-zinc-950 w-[280px] hover:scale-90 transition-transform">
            <img className="h-[200px] w-full object-cover" src={imgSrc} alt="" />
            <div className="p-3">
                <h3 className="text-white text-center font-semibold text-2xl mb-3">{title}</h3>
                <p className="text-gray-300 text-start">{description}</p>
                {isVisited && <span className="mt-2 block text-gray-300">✔ Visitata</span>}
                {!isVisited && <span className="mt-2 block text-gray-300">❌ Non visitata</span>}
            </div>
        </div>
    )
}

export default Card;