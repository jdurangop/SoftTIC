import { useState } from "react";
import { useHistory } from "react-router";
import styleRegProd from "../../css/Style-Registro.module.css"
import { crearUsuarioCorreo } from '../../config/firebase';
import { validate } from "email-validator";

export function RegistroUsuario() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleRegistro = async (e) => {
        e.preventDefault()

        if (!name.trim()){
            alert("Por favor ingresa un nombre")
            return
        }

        if (password.length < 6) {
            alert("Contraseña debe ser mayor a 6 caracteres");
            return
        }

        if (!validate(email)) {
            alert("Correo no valido");
            return
        }

        const res = await crearUsuarioCorreo(email.trim(), password, name.trim())

        if(res === 0){
            alert("Datos de usuario no validos")
            return
        }

        history.push('/p')
    }


    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>Registro Usuario</h2>
                <form id="formReg">
                    <div className={styleRegProd["form-places"]}>
                        <label>Nombre completo</label>
                        <input
                            type="text"
                            placeholder="Escribe tu nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={styleRegProd["form-places"]}>
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="Escribe tu correo electronico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Crea una contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button
                            type="submit"
                            onClick={handleRegistro}
                            className={styleRegProd["btn-registrarse"]}
                        >Registrarse</button>
                    </div>

                </form>

                <div className={styleRegProd["btn-externo-registro"]}>
                    <button
                        type="submit"
                        className={styleRegProd["btn-cancelar"]}
                        onClick={(e) => {
                            e.preventDefault()
                            setEmail("")
                            setName("")
                            setPassword("")
                            history.push("/")
                        }}
                    >Cancelar</button>
                </div>
            </div>
        </div>
    );
}