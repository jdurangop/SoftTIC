import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import { consultarDocumentoDatabase, actualizarDocumentoDatabase, guardarDatabase } from "../../config/firebase"
import styles from "../../css/Style-Registro.module.css"

export function RegistroVenta() {

    const { id } = useParams();

    const [nombre, setNombre] = useState()
    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState("");
    const [fecha, setFecha] = useState("");
    const [encargado, setEncargado] = useState("");

    const history = useHistory();

    const consultarVenta = async (idVenta) => {
        const temp = await consultarDocumentoDatabase('lista-ventas', idVenta)
        setNombre(temp.nombre)
        setDescripcion(temp.descripcion)
        setValor(temp.valor)
        setFecha(temp.fechaPago)
        setEncargado(temp.encargado)
    }

    useEffect(() => {

        if (id !== 'NuevaVenta') {
            consultarVenta(id)
        }

        setNombre("")
        setDescripcion("")
        setValor("")
        setFecha("")
        setEncargado("")


    }, [id])

    const handleActualizarProducto = async (e) => {
        e.preventDefault()

        const venta = {
            nombre,
            descripcion,
            valor,
            fechaPago: fecha,
            encargado
        }

        await actualizarDocumentoDatabase('lista-ventas', id, venta)
        history.push('/sales')


    }

    const handleGuardarProducto = async (e) => {
        e.preventDefault()

        const venta = {
            nombre,
            descripcion,
            valor,
            fechaPago: fecha,
            encargado
        }

        await guardarDatabase('lista-ventas', venta)
        history.push('/sales')
    }


    return (
        <div className={styles["formulario-registro"]}>
            <h2>
            {id === "NuevaVenta" ? "Nueva" : "Modificar"} Venta
            </h2>
            <form>
                <div className={styles["form-places"]}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        id="productName"
                        placeholder="Nombre producto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className={styles["form-places"]}>
                    <label>Valor</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Valor de la venta"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} />
                </div>
                <div className={styles["form-places"]}>
                    <label >Descripción</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Descripción de la venta"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div className={styles["form-places"]}>
                    <label >Fecha de pago</label>
                    <input
                        type="text"
                        id="sPayDate"
                        placeholder="Fecha de pago"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className={styles["form-places"]}>
                    <label>Responsable</label>
                    <input
                        type="text"
                        id="manager"
                        placeholder="Responsable de la venta"
                        value={encargado}
                        onChange={(e) => setEncargado(e.target.value)} />
                </div>

                <div className={styles["btn-externo-registro"]}>
                    <button
                        type="submit"
                        className={styles["btn-registrarse"]}
                        onClick={id === 'NuevaVenta' ? handleGuardarProducto : handleActualizarProducto}
                    >{id === "NuevaVenta" ? "Generar" : "Modificar"} Venta</button>
                </div>

            </form>
        </div>
    );
}