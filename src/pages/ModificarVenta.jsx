import styleRegProd from "../css/Style-Registro.module.css"

export function ModificarVenta() {
    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>Modificar Venta</h2>
                <form>
                    <div className={styleRegProd["form-places"]}>
                        <label for="name">Nombre producto</label>
                        <input type="text" id="productName" placeholder="Nombre producto" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="price">Valor</label>
                        <input type="number" id="price" placeholder="Valor de la venta" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="description">Descripción</label>
                        <input type="text" id="description" placeholder="Descripción de la venta" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="paymentDate">Fecha de pago</label>
                        <input type="date" id="sPayDate" placeholder="Fecha de pago" />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="manager">ID del responsable</label>
                        <input type="text" id="manager" placeholder="Responsable de la venta" />
                    </div>

                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button type="submit" value="1" className={styleRegProd["btn-registrarse"]} onclick="modifySale()">Modificar venta</button>
                    </div>
                </form>

                <div className={styleRegProd["btns"]}>
                    <a id="cancelar" href="HistorialVenta.html" title="link a HistorialVenta">
                        <button className={styleRegProd["btn-cancelar"]}>Cancelar</button>
                    </a>
                </div>
            </div>
        </div>
    );
}