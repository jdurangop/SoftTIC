import styles from "../css/Style-Historial.module.css"

export function ListaUsuarios() {
    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Usuarios</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <input type="text" placeholder="Buscar: id-#, des-texto"/>
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
                        <tr>
                            <td>1</td>
                            <td>Halli</td>
                            <td>Boik</td>
                            <td>hboik0@huffingtonpost.com</td>
                            <td>Female</td>
                            <td>General</td>
                            <td>Autorizado</td>
                        </tr>
                       
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