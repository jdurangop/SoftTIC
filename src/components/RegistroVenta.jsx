import styles from "../css/Style-Registro.module.css"
export function RegistroVenta() {
    return (
        <div className={styles["formulario-registro"]}>
            <h2>Registro Venta</h2>
            <form>
                <div className={styles["form-places"]}>
                    <label for="name">Nombre producto</label>
                    <input type="text" id="productName" placeholder="Nombre producto" required />
                </div>
                <div className={styles["form-places"]}>
                    <label for="price">Valor</label>
                    <input type="number" id="price" placeholder="Valor de la venta" required />
                </div>
                <div className={styles["form-places"]}>
                    <label for="description">Descripción</label>
                    <input type="text" id="description" placeholder="Descripción de la venta" required />
                </div>
                <div className={styles["form-places"]}>
                    <label for="paymentDate">Fecha de pago</label>
                    <input type="date" id="sPayDate" placeholder="Fecha de pago" />
                </div>
                <div className={styles["form-places"]}>
                    <label for="manager">ID del responsable</label>
                    <input type="text" id="manager" placeholder="Responsable de la venta" />
                </div>

                <div className={styles["btn-externo-registro"]}>
                    <button type="submit" className={styles["btn-registrarse"]} onclick="insertNewSale()">Registrar venta</button>
                </div>

            </form>
        </div>
    );
}