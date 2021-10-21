import { Link } from "react-router-dom";
import styles from "../../css/Style-Historial.module.css"
import { useState, useEffect } from "react";
import { consultarDatabase } from "../../config/firebase";

export function HistorialVentas() {
    const [listaVentas, setListaVentas] = useState([])

    const cargarVentas = async ()=>{
        const temp = await consultarDatabase("lista-ventas");
        setListaVentas(temp);
    }

    useEffect(()=> {
        cargarVentas()
    }, [])

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
                        {listaVentas.map((venta, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{venta.nombre}</td>
                                <td>{venta.fechaPago}</td>
                                <td>{venta.descripcion}</td>
                                <td>{venta.valor}</td>
                                <td>{venta.encargado}</td>
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