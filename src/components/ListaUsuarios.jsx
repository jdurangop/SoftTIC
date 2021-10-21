import { Link } from "react-router-dom";
import styles from "../css/Style-Historial.module.css"
import { useState, useEffect } from "react";
import { consultarDatabase } from "../config/firebase"


export function ListaUsuarios() {
    const [listaUsuarios, setListaUsuarios] = useState([])

    const cargarUsuarios = async ()=>{
        const temp = await consultarDatabase("lista-usuarios");
        setListaUsuarios(temp);
    }

    useEffect(()=> {
        cargarUsuarios()
    }, [])

    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Usuarios</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <input type="text" placeholder="Buscar: id-#, des-texto" />
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
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaUsuarios.map((usuario, index) => (

                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.genero}</td>
                                    <td>{usuario.rol}</td>
                                    <td>{usuario.estado}</td>
                                    <td><Link className={styles.btnEdit} to={`/users/${usuario.id}`}>Editar</Link></td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles["btns"]}>
                <Link className={styles["btn"]} to="/users/regUsuario">Nuevo Usuario</Link>
            </div>
        </div>
    );
}