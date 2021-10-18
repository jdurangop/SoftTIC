import { Link } from "react-router-dom";
import styles from "../css/Style-Historial.module.css"
import usuarios from "../datosPrueba/Usuarios.json"


export function ListaUsuarios() {

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
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Género</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario) => (

                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.Nombres}</td>
                                    <td>{usuario.Apellidos}</td>
                                    <td>{usuario.Correo}</td>
                                    <td>{usuario.Genero}</td>
                                    <td>{usuario.Rol}</td>
                                    <td>{usuario.Estado}</td>
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