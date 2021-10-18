import { Link } from "react-router-dom";
import styles from "../css/Style-Historial.module.css"
import ventas from "../datosPrueba/Ventas.json"

export function HistorialVentas() {
    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Historial de ventas</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <input type="text" placeholder="Buscar: id-#, des-texto" />
                </div>
            </div>
            <div className={`${styles["tableframe"]} ${styles["table-position"]}`}>
                <table className={`${styles["dataframe"]} ${styles.BodyHist}`} id="salesTable">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Fecha de pago</th>
                            <th>Descripción</th>
                            <th>Valor</th>
                            <th>Encargado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta) => (
                            <tr key={venta.id}>
                                <td>{venta.id}</td>
                                <td>{venta.Nombre}</td>
                                <td>{venta["Fecha de pago"]}</td>
                                <td>{venta["Descripción"]}</td>
                                <td>{venta.Valor}</td>
                                <td>{venta.Encargado}</td>
                                <td><Link className={styles.btnEdit} to={`/sales/${venta.id}`}>Editar</Link></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles["btns"]}>
                <Link className={styles["btn"]} to="/sales/NuevaVenta">Nueva Venta</Link>
            </div>
        </div>
    );
}