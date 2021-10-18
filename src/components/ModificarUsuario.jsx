import styleRegProd from "../css/Style-Registro.module.css"

export function ModificarUsuario() {
    return (
        <div>
            <div className={styleRegProd["formulario-registro"]}>
                <h2>Modificar Usuario</h2>
                <form >
                    <div className={styleRegProd["form-places"]}>
                        <label for="name">Nombre(s)</label>
                        <input type="text" name="name" placeholder="Nombre" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="surname">Apellidos(s)</label>
                        <input type="text" name="surname" placeholder="Apellidos" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="correo">Correo electrónico</label>
                        <input type="email" name="correo" placeholder="Escribe tu correo electronico" required />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="gender">Género</label>
                        <input type="text" name="gender" placeholder="Opcional" />
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="Rol">Rol</label>
                        <select name="Rol" >
                            <option value="General">General</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                        </select>
                    </div>
                    <div className={styleRegProd["form-places"]}>
                        <label for="Estado">Estado</label>
                        <select name="Estado">
                            <option value="Pendiente">Pendiente</option>
                            <option value="No autorizado">No Autorizado</option>
                            <option value="Autorizado">Autorizado</option>
                        </select>
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