import styleRegProd from "../css/Style-Registro.module.css"

export function ModificarUsuario() {
    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>Información Usuario</h2>
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
                        <label for="Rol">Rol</label>
                        <input type="Texto" name="Rol" placeholder="Rol" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="phone">Teléfono <span>(Opcional)</span></label>
                        <input type="password" name="phone" placeholder="Numero contacto" />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="Estado">Estado</label>
                        <input type="Texto" name="phone" placeholder="Numero contacto" required />
                    </div>

                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button type="submit" className={styleRegProd["btn-registrarse"]}>Guardar</button>
                    </div>

                    <div className={styleRegProd["btn-externo-registro"]}>
                        <button type="submit" className={styleRegProd["btn-cancelar"]}>Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}