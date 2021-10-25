import { Link } from "react-router-dom";
import styles from "../../css/Style-Historial.module.css"
import { useState, useEffect } from "react";
import { consultaPorItemDocumentos, consultarDatabase } from "../../config/firebase";

export function HistorialVentas({ Rol }) {
    const [listaVentas, setListaVentas] = useState([])
    const [listaProductos, setListaProductos] = useState({})

    const [busqueda, setBusqueda] = useState("")
    const [campoBusqueda, setCampoBusqueda] = useState("servicio")

  


    const handleBusqueda = async (e) => {
        e.preventDefault()
        if (!busqueda.trim()) {
            return
        } else {
            const temp = await consultaPorItemDocumentos("lista-ventas", campoBusqueda, "==", busqueda)

            setListaVentas(temp);
        }
    }

    const cargarVentas = async () => {
        const temp = await consultarDatabase("lista-ventas");
        setListaVentas(temp);
    }

    const cargarProductos = async () => {
        const temp = await consultarDatabase("lista-servicios");
        const tempArreglo = {}
        temp.map((producto) => {
            tempArreglo["s-" + producto.id] = producto.descripcion;
            tempArreglo["v-" + producto.id] = producto.valor;
            return 0;
        })
        setListaProductos(tempArreglo);

    }
    useEffect(() => {
        cargarVentas()
        cargarProductos()
    }, [])
    

    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Historial de ventas</h2>
                </div>
                <div className={styles["campo-busqueda"]}>
                    <select
                        value={campoBusqueda}
                        onChange={(e) => setCampoBusqueda(e.target.value)}>
                        <option value="servicio">Servicio</option>
                        <option value="cliente">Cliente</option>
                    </select>
                    <button
                        onClick={(e) => handleBusqueda(e)}>Buscar</button>
                    <input
                        type="text"
                        placeholder="Buscar: Texto en el campo"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </div>
            <div className={`${styles["tableframe"]} ${styles["table-position"]}`}>
                <table className={`${styles["dataframe"]} ${styles.BodyHist}`} id="salesTable">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Servicio</th>
                            <th>Valor</th>
                            <th>Cliente</th>
                            <th>Fecha Pago</th>
                            <th>Encargado</th>
                            {Rol !== 1 ? null : <th></th>}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            listaVentas.map((venta, index) => (

                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{listaProductos["s-" + venta.servicio]}</td>
                                    <td>{listaProductos["v-" + venta.valor]}</td>
                                    <td>{venta.cliente}</td>
                                    <td>{venta.fechaPago}</td>
                                    <td>{venta.encargado}</td>
                                    {Rol !== 1 ? null :
                                        <td><Link className={styles.btnEdit} to={`/sales/${venta.id}`}>Editar</Link></td>
                                    }
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