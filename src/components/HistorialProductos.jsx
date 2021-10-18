import { Link } from "react-router-dom";
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
                            <th></th>
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
                                    <td><Link className={styles.btnEdit} to={`/products/${producto.id}`}>Editar</Link></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <div className={styles["btns"]}>
                <Link className={styles["btn"]} to="/products/crearProducto">Crear Producto</Link>
            </div>
        </div>
    );
}