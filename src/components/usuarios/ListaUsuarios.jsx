import { Link } from "react-router-dom";
import styles from "../../css/Style-Historial.module.css"
import { useState, useEffect } from "react";
import { consultarDatabase } from "../../config/firebase"
import roles from "../../config/Roles.json"
import { consultaPorItemDocumentos } from './../../config/firebase';


export function ListaUsuarios() {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [campoBusqueda, setCampoBusqueda] = useState("email")


    const cargarUsuarios = async () => {
        const temp = await consultarDatabase("lista-usuarios");
        setListaUsuarios(temp);
    }

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const handleBusqueda = async (e) => {
        e.preventDefault()
        if (!busqueda.trim()) {
            return
        } else {
            const temp = await consultaPorItemDocumentos("lista-usuarios", campoBusqueda, "==", busqueda)
            console.log(temp);
            console.log(campoBusqueda);
            console.log(busqueda);
            // setListaUsuarios(temp)
            // console.log(listaUsuarios);
            setListaUsuarios(temp);
        }
    }

    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Usuarios</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <select
                        value={campoBusqueda}
                        onChange={(e) => setCampoBusqueda(e.target.value)}>
                        <option value="nombres">Nombres</option>
                        <option value="email">Correo</option>
                    </select>
                    <button
                        onClick={(e) => handleBusqueda(e)}>Buscar</button>
                    <input
                        type="text"
                        id="campoBusqueda"
                        placeholder="Buscar: Texto en el campo"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />

                </div>
            </div>
            <div className={`${styles["tableframe"]} ${styles["table-position"]}`}>
                <table className={`${styles.BodyHist}`}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombres</th>
                            <th>Correo</th>
                            <th>Género</th>
                            <th>Rol</th>
                            <th>Fecha Nacimiento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaUsuarios.map((usuario, index) => (

                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{usuario.nombres}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.genero}</td>
                                    <td>{roles[usuario.rol]}</td>
                                    <td>{usuario.fechaNa}</td>
                                    <td><Link className={styles.btnEdit} to={`/users/${usuario.id}`}>Editar</Link></td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* <div className={styles["btns"]}>
                <Link className={styles["btn"]} to="/users/regUsuario">Nuevo Usuario</Link>
            </div> */}
        </div>
    );
}