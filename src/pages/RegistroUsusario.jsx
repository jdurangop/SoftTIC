import styleRegProd from "../css/Style-Registro.module.css"
export function RegistroUsuario() {
    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>Registro Usuario</h2>
                <form >
                    <div className={styleRegProd["form-places"]}>
                        <label for="name">Nombre(s)</label>
                        <input type="text" name="name" placeholder="Nombre completo" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="correo">Correo electrónico</label>
                        <input type="email" name="correo" placeholder="Escribe tu correo electronico" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="phone">Teléfono <span>(Opcional)</span></label>
                        <input type="password" name="phone" placeholder="Numero contacto" />
                    </div>

                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button type="submit" value="1" className={styleRegProd["btn-registrarse"]}>Registrarse</button>
                    </div>

                </form>

                <div className={styleRegProd["btn-externo-registro"]}>
                    <button type="submit" className={styleRegProd["btn"]}>
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />Registro con Google
                    </button>
                </div>
            </div>
        </div>
    );
}