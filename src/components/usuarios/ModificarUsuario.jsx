import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import styleRegProd from "../../css/Style-Registro.module.css"
import { consultarDocumentoDatabase, actualizarDocumentoDatabase, guardarDatabase } from "../../config/firebase"


export function ModificarUsuario() {
    const { id } = useParams();

    const [nombres, setNombres] = useState("");
    const [email, setEmail] = useState("");
    const [genero, setGenero] = useState("");
    const [rol, setRol] = useState("");

    const history = useHistory();

    const consultarUsuario = async (idUsuario) => {
        const Temp = await consultarDocumentoDatabase('lista-usuarios', idUsuario)
        setNombres(Temp.nombres);
        setEmail(Temp.email);
        setGenero(Temp.genero);
        setRol(Temp.rol);
    }

    useEffect(() => {

        if (id !== 'regUsuario') {
            consultarUsuario(id)
        }

        setNombres("");
        setEmail("");
        setGenero("");
        setRol("");


    }, [id])

    const handleActualizarUsuario = async (e) => {
        e.preventDefault()

        const usuario = {
            nombres,
            email,
            genero,
            rol,
        }

        await actualizarDocumentoDatabase('lista-usuarios', id, usuario)
        history.push('/users')


    }

    const handleGuardarUsuario = async (e) => {
        e.preventDefault()

        const usuario = {
            nombres,
            email,
            genero,
            rol
        }

        await guardarDatabase('lista-usuarios', usuario)
        history.push('/users')
    }

    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>
                    {id === "regUsuario" ? "Registrar" : "Modificar"} Usuario
                </h2>
                <form >
                    <div className={styleRegProd["form-places"]}>
                        <label >Nombre(s)</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)} />
                    </div>

                    <div className={styleRegProd["form-places"]}>
                        <label >Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="Escribe tu correo electronico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className={styleRegProd["form-places"]}>
                        <label >Género</label>
                        <input
                            type="text"
                            placeholder="Opcional"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)} />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label>Rol</label>
                        <select
                            name="Rol"
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}>
                            <option value="General">General</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                        </select>
                    </div>


                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button
                            type="submit"
                            className={styleRegProd["btn-registrarse"]}
                            onClick={id === 'regUsuario' ? handleGuardarUsuario : handleActualizarUsuario}
                        >{id === "regUsuario" ? "Crear" : "Modificar"} Usuario</button>
                    </div>

                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button
                            type="submit"
                            className={styleRegProd["btn-cancelar"]}
                            onClick={() => { history.push("/users") }}
                        >Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}