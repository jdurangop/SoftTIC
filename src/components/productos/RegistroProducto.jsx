import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import styleRegProd from "../../css/Style-Registro.module.css"
import { consultarDocumentoDatabase, actualizarDocumentoDatabase, guardarDatabase } from "../../config/firebase"



export function RegistroProducto() {

    const { id } = useParams();

    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState("");
    const [estado, setEstado] = useState("");

    const history = useHistory();

    const consultarProducto = async (idProducto) => {
        const Temp = await consultarDocumentoDatabase('lista-servicios', idProducto)
        setDescripcion(Temp.descripcion)
        setValor(Temp.valor)
        setEstado(Temp.estado)
    }

    useEffect(() => {

        if (id !== 'crearProducto') {
            consultarProducto(id)
        }

        setDescripcion('')
        setValor('')
        setEstado('')


    }, [id])

    const handleActualizarProducto = async (e) => {
        e.preventDefault()

        const producto = {
            descripcion,
            valor,
            estado
        }

        await actualizarDocumentoDatabase('lista-servicios', id, producto)
        history.push('/products')


    }

    const handleGuardarProducto = async (e) => {
        e.preventDefault()

        const producto = {
            descripcion,
            valor,
            estado
        }

        await guardarDatabase('lista-servicios', producto)
        history.push('/products')
    }



    return (
        <div className={`${styleRegProd["formulario-registro"]}`}>
            <h2>
                {id === "crearProducto" ? "Crear" : "Modificar"} Servicio
            </h2>
            <form>
                <div className={styleRegProd["form-places"]}>
                    <label >Descripción</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Descripción del producto"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div className={styleRegProd["form-places"]}>
                    <label >Valor</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Valor del producto"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} />
                </div>

                <div className={styleRegProd["form-places"]}>
                    <label >Estado</label>
                    <input
                        type="text"
                        id="status"
                        placeholder="Estado del producto"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)} />
                </div>

                <div className={styleRegProd["btn-externo-registro"]}>
                    <button
                        type="submit"
                        className={styleRegProd["btn-registrarse"]}
                        onClick={id === 'crearProducto' ? handleGuardarProducto : handleActualizarProducto}
                    >{id === "crearProducto" ? "Crear" : "Modificar"} Servicio</button>
                </div>

            </form>
        </div>
    );
}