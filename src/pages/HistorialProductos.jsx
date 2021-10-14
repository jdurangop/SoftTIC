import styles from "../css/Style-Historial.module.css"


export function HistorialProductos() {
    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Lista de productos</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <input type="text" placeholder="Buscar: id-#, des-texto"/>
                </div>
            </div>
            <div className={`${styles["tableframe"]} ${styles["table-position"]}`}>
                <table className={`${styles["dataframe"]} ${styles.BodyHist}`} id="salesTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Valor</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ecografia</td>
                            <td>7000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Psicoligía</td>
                            <td>5500</td>
                            <td>Disponible</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles["btns"]}>
                <a id="nuevaV" href="registroProducto.html" title="link a registroProducto">
                    <button className={styles["btn"]}>Nuevo producto</button>
                </a>
                <a id="nuevaV" href="modificarProducto.html" title="link a modificarProducto">
                    <button className={styles["btn"]}>Modificar producto</button>
                </a>
            </div>
        </div>
    );
}