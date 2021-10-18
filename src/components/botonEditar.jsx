export function botonEditar({path, classes}, childs){
    return (
        <Link to={path}><button className={classes}>Editar</button></Link>
    )
}