import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import { consultarDocumentoDatabase, actualizarDocumentoDatabase, guardarDatabase, consultarDatabase } from "../../config/firebase"
import styles from "../../css/Style-Registro.module.css"
import { auth } from "../../config/firebase";

export function RegistroVenta({Rol}) {

    const { id } = useParams();

    const [servicio, setServicio] = useState()
    const [cliente, setCliente] = useState("");
    const [valor, setValor] = useState("");
    const [fecha, setFecha] = useState("");
    const [encargado, setEncargado] = useState("");


    const [listaProductos, setListaProductos] = useState([])

    const history = useHistory();

    const consultarVenta = async (idVenta) => {
        const temp = await consultarDocumentoDatabase('lista-ventas', idVenta)
        setServicio(temp.servicio)
        setCliente(temp.cliente)
        setValor(temp.valor)
        setFecha(temp.fechaPago)
        setEncargado(temp.encargado)
    }

    useEffect(() => {
        
        if (id !== 'NuevaVenta') {
            consultarVenta(id)
        }

        cargarProductos()

        setServicio("")
        setCliente("")
        setValor("")
        setFecha("")
        setEncargado(id === "NuevaVenta" ? auth.currentUser.displayName : "")


    }, [id])

   

    const cargarProductos = async ()=>{
        const temp = await consultarDatabase("lista-servicios");
        setListaProductos(temp);
    }

    // useEffect(()=> {
    //     cargarProductos()
    // }, [])

    const handleActualizarVenta = async (e) => {
        e.preventDefault()

        const venta = {
            servicio,
            cliente,
            valor,
            fechaPago: fecha,
            encargado
        }

        await actualizarDocumentoDatabase('lista-ventas', id, venta)
        history.push('/sales')


    }

    const handleGuardarVenta = async (e) => {
        e.preventDefault()

        const venta = {
            servicio,
            cliente,
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
                    <label>Servicio</label>
                    <select 
                    value={servicio}
                    onChange={(e) => {
                        setServicio(e.target.value)
                        setValor(e.target.value)}}
                    >
                        <option value="">...</option>
                        {
                            listaProductos.map((producto)=>(
                                <option value={producto.id} key={producto.id}>{producto.descripcion}</option>
    ))
                        }
                    </select>
                    {/* <input
                        type="text"
                        id="productName"
                        placeholder="Nombre producto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} /> */}
                </div>
                <div className={styles["form-places"]}>
                    <label>Valor</label>
                    <select
                    disabled
                    value={servicio}
                    onChange={(e) => setValor(e.target.value)}
                    >
                        <option value="">...</option>
                        {
                            listaProductos.map((producto)=>(
                                <option value={producto.id} key={producto.id}>{producto.valor}</option>
                            ))
                        }
                    </select>
                    {/* <input
                        type="number"
                        id="price"
                        placeholder="Valor de la venta"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} /> */}
                </div>
                <div className={styles["form-places"]}>
                    <label >Cliente</label>
                    <input
                        type="text"
                        placeholder="Nombre de cliente"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)} />
                </div>
                <div className={styles["form-places"]}>
                    <label >Fecha de pago</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>
               { Rol !== 1 ? null :
                <div className={styles["form-places"]}>
                    <label>Responsable</label>
                    <input
                        type="text"
                        id="manager"
                        placeholder="Responsable de la venta"
                        value={encargado}
                        onChange={(e) => setEncargado(e.target.value)} />
                </div>}

                <div className={styles["btn-externo-registro"]}>
                    <button
                        type="submit"
                        className={styles["btn-registrarse"]}
                        onClick={id === 'NuevaVenta' ? handleGuardarVenta : handleActualizarVenta}
                    >{id === "NuevaVenta" ? "Generar" : "Modificar"} Venta</button>
                </div>
                <div className={styles["btn-externo-registro"]}>
                        <button
                            type="submit"
                            className={styles["btn-cancelar"]}
                            onClick={() => { history.push("/sales") }}
                        >Cancelar</button>
                    </div>
            </form>
        </div>
    );
}