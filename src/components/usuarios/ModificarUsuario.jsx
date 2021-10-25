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
    const [fechaNa, setFechaNa] = useState("");

    const history = useHistory();

    const consultarUsuario = async (idUsuario) => {
        const Temp = await consultarDocumentoDatabase('lista-usuarios', idUsuario)
        setNombres(Temp.nombres);
        setEmail(Temp.email);
        setGenero(Temp.genero);
        setRol(Temp.rol);
        setFechaNa(Temp.fechaNa)
    }

    useEffect(() => {

        if (id !== 'regUsuario') {
            consultarUsuario(id)
        }

        setNombres("");
        setEmail("");
        setGenero("");
        setRol("");
        setFechaNa("");


    }, [id])

    const handleActualizarUsuario = async (e) => {
        e.preventDefault()

        const usuario = {
            nombres,
            email,
            genero,
            rol,
            fechaNa
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
            rol,
            fechaNa
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
                            placeholder="Correo electronico Usuario"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                    </div>

                    <div className={styleRegProd["form-places"]}>
                        <label>Género</label>
                        <select
                            value={genero}
                            onChange={(e) => setGenero(e.target.value.toLowerCase())}
                        >
                            <option value="">Sin especificar</option>
                            <option value="mujer">Mujer</option>
                            <option value="hombre">Hombre</option>
                        </select>
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label >Fecha Nacimiento</label>
                        <input
                            type="date"
                            value={fechaNa}
                            onChange={(e) => setFechaNa(e.target.value)} />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label>Rol</label>
                        <select
                            name="Rol"
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}>
                            <option value="0">General</option>
                            <option value="1">Administrador</option>
                            <option value="2">Vendedor</option>
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