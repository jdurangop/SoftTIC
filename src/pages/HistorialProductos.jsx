import styles from "../css/Style-Historial.module.css"
import productos from "../datosPrueba/Productos.json"


export function HistorialProductos() {
    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Lista de productos</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <input type="text" placeholder="Buscar: id-#, des-texto" />
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
                        {
                            productos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto["Descripción"]}</td>
                                    <td>{producto.Valor}</td>
                                    <td>{producto.Estado}</td>
                                </tr>
                            ))
                        }


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