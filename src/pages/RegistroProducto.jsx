import styleRegProd from "../css/Style-Registro.module.css"
export function RegistroProducto(){
    const insertNewProduct = ()=>{
        // alert("Datos guardados exitosamente");
    }


    return (
        <div className={`${styleRegProd["formulario-registro"]}`}>
        <h2>Registro Producto</h2>
        <form>
            <div className={styleRegProd["form-places"]}>
                <label for="idProd">ID producto</label>
                <input type="number" min="0" id="productID" placeholder="ID del producto" required/>
            </div>
            <div className={styleRegProd["form-places"]}>
                <label for="description">Descripción</label>
                <input type="text" id="description" placeholder="Descripción del producto" required/>
            </div>
            <div className={styleRegProd["form-places"]}>
                <label for="price">Valor</label>
                <input type="number" id="price" placeholder="Valor del producto" required/>
            </div>
            
            <div className={styleRegProd["form-places"]}>
                <label for="status">Estado</label>
                <input type="text" id="status" placeholder="Estado del producto"/>
            </div>

            <div className={styleRegProd["btn-externo-registro"]}>
                <button type="submit" className={styleRegProd["btn-registrarse"]} onClick={() => insertNewProduct()}>Registrar producto</button>
            </div>

        </form>
    </div>
    );
}