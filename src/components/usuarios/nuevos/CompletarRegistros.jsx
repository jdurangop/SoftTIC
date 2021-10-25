import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styleRegProd from "../../../css/Style-Registro.module.css"
import { actualizarDocumentoDatabase, consultarDocumentoDatabase } from '../../../config/firebase';


export function CompletarRegistros({ idUser }) {

    const [nombres, setNombres] = useState('')
    const [email, setEmail] = useState('')
    const [genero, setGenero] = useState('')
    const [edad, setEdad] = useState('')
    const [rol, setRol] = useState('')
    const [uid, setUid] = useState('')


    const history = useHistory()

    const consultarUsuario = async (idUsuario) => {
        const Temp = await consultarDocumentoDatabase('lista-usuarios', idUsuario)
        setNombres(Temp.nombres);
        setEmail(Temp.email);
        setGenero(Temp.genero);
        setRol(Temp.rol);
        setUid(Temp.uid);
    }

    const handleGuardar = async (e) => {
        e.preventDefault()
        if (nombres) {
            if (!nombres.trim()) {
                alert("Debe tener un Nombre");
                return
            }
        }else{
            alert("Debe tener un Nombre");
            return 
        }

        if (Date.parse(edad)) {
        } else {
            alert("Fecha no valida");
            return
        }

        const usuario = {
            nombres,
            email,
            genero,
            edad,
            rol,
            uid
        }


        await actualizarDocumentoDatabase('lista-usuarios', idUser, usuario)
        history.push('/')


    }

    useEffect(() => {
        consultarUsuario(idUser)
    }, [idUser])


    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>Bienvenido por favor dejanos conocerte más</h2>
                <form id="formReg">
                    <div className={styleRegProd["form-places"]}>
                        <label>Nombre(s)</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombres ? nombres : ""}
                            onChange={(e) => setNombres(e.target.value)} />
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
                        <label>Correo electrónico</label>
                        <input
                            type="text"
                            value={email}
                            disabled />
                    </div>

                    <div className={styleRegProd["form-places"]}>
                        <label>Fecha nacimiento</label>
                        <input
                            type="date"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value.toLowerCase())} />
                    </div>


                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button
                            type="submit"
                            onClick={handleGuardar}
                            className={styleRegProd["btn-registrarse"]}
                        >Guardar</button>
                    </div>

                </form>

                <div className={styleRegProd["btn-externo-registro"]}>
                    <button
                        type="submit"
                        className={styleRegProd["btn-cancelar"]}
                        onClick={(e) => {
                            e.preventDefault()
                            history.push("/")
                        }}
                    >Cancelar</button>
                </div>
            </div>
        </div>
    );
}