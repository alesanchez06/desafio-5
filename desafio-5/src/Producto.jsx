const Producto = ({subtitulo,descripcion,imagen})=>{
    return(
        <div>
            <h1>{subtitulo}</h1>
            <p>{descripcion}</p>
            <img src= {imagen} alt={descripcion} />
        </div>
    )
}

export default Producto