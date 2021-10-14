import styles from "../css/Style-Historial.module.css"

export function HistorialVentas(){
    return(
        <div>
            <div className={styles["flex-pos"]}>
        <div className={styles["title"]}>
            <h2>Historial de ventas</h2>
        </div>
        <div className={styles["campo-busqueda"]}>
            <input type="text"  placeholder="Buscar: id-#, des-texto"/>
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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Marco Talbot</td>
                    <td>14/01/2021</td>
                    <td>Ecografia</td>
                    <td>7000</td>
                    <td>Heidenreich LLC</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mellicent Eggleson</td>
                    <td>15/11/2020</td>
                    <td>Psicoligía</td>
                    <td>5500</td>
                    <td>Reilly-Kiehn</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className={styles["btns"]}>
        <a id="nuevaV" href="registroVenta.html" title="link a registroVenta">
            <button className={styles["btn"]}>Nueva venta</button>
        </a>
        <a id="modificarVenta" href="modificarVenta.html" title="link a modificarVenta">
            <button className={styles["btn"]}>Modificar venta</button>
        </a>
    </div>
        </div>
    );
}