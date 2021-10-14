import styleRegProd from "../css/Style-Registro.module.css"

export function ModificarProducto() {
    return (
        <div className={styleRegProd["formulario-registro"]}>
            <h2>Modificar Producto</h2>
            <form>
                <div className={styleRegProd["form-places"]}>
                    <label for="idProd">ID producto</label>
                    <input type="number" id="productID" placeholder="ID del producto" required />
                </div>
                <div className={styleRegProd["form-places"]}>
                    <label for="description">Descripción</label>
                    <input type="text" id="description" placeholder="Descripción del producto" required />
                </div>
                <div className={styleRegProd["form-places"]}>
                    <label for="price">Valor</label>
                    <input type="number" id="price" placeholder="Valor del producto" required />
                </div>

                <div className={styleRegProd["form-places"]}>
                    <label for="status">Estado</label>
                    <input type="text" id="status" placeholder="Estado del producto" />
                </div>

                <div className={styleRegProd["btn-externo-registro"]}>
                    <button type="submit" value="1" className={styleRegProd["btn-registrarse"]} onclick="modifyProduct()">Modificar producto</button>
                </div>

            </form>

            <div className={styleRegProd["btns"]}>
                <a id="cancelar" href="HistorialProductos.html" title="link a HistorialProductos">
                    <button className={styleRegProd["btn-cancelar"]}>Cancelar</button>
                </a>
            </div>
        </div>
    );
}