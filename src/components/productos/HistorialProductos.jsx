import { Link } from "react-router-dom";
import styles from "../../css/Style-Historial.module.css"
import { useState, useEffect } from "react";
import { consultarDatabase } from "../../config/firebase"


export function HistorialProductos() {
    const [listaProductos, setListaProductos] = useState([])

    const cargarProductos = async ()=>{
        const temp = await consultarDatabase("lista-servicios");
        setListaProductos(temp);
    }

    useEffect(()=> {
        cargarProductos()
    }, [])


    return (
        <div>
            <div className={styles["flex-pos"]}>
                <div className={styles["title"]}>
                    <h2>Lista de Servicios</h2>
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
                            listaProductos.map((listaProducto, index) => (
                                <tr key={index + 1}>
                                    <td>{index}</td>
                                    <td>{listaProducto["descripcion"]}</td>
                                    <td>{listaProducto.valor}</td>
                                    <td>{listaProducto.estado}</td>
                                    <td><Link className={styles.btnEdit} to={`/products/${listaProducto.id}`}>Editar</Link></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <div className={styles["btns"]}>
                <Link className={styles["btn"]} to="/products/crearProducto">Crear servicio</Link>
            </div>
        </div>
    );
}