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
                <table className={`${styles["dataframe"]} ${styles.BodyHist}`}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Genero</th>
                            <th>Rol</th>
                            <th>Estado</th>
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
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles["btns"]}>
                <button className={styles["btn"]}>Nuevo Usuario</button>
                <button className={styles["btn"]}>Modificar Usuario</button>
            </div>
        </div>
    );
}