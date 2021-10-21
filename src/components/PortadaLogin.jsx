import { Link } from "react-router-dom";
import styles from "../css/Style-Portada.module.css"
import { signUsuarioGoogle, signUsuarioCorreo } from "../config/firebase";


export function PortadaLogin({Auth}) {


    const handleSingIn = async (e) => {
        e.preventDefault();
        signUsuarioGoogle(Auth);
    };

    const handleSingInCorreo = async (e) => {
        e.preventDefault();
        const correo = document.getElementById("email");
        const clave = document.getElementById("clave");
        signUsuarioCorreo(Auth, correo, clave);
    };




    return (
        <div className={styles["contenedor"]}>
            <div className={`${styles["items-logo-center"]} ${styles["logo-nombre"]}`}>
                <h2>Soluciones Médicas</h2>
                <figure>
                    <img src="https://cdn.pixabay.com/photo/2012/04/12/20/46/caduceus-30591_960_720.png" alt="Logo pagina" className={styles["img-logo-size"]} />
                    <figcaption>SM</figcaption>
                </figure>
            </div>

            <div className={styles["form-ingreso"]}>
                <div className={`${styles["form-ingreso-width-height"]} ${styles["ingresar-plataforma"]}`}>
                    <p>Agenda tu cita</p>
                    <form className={styles["login-form"]}>
                        <input type="email" id="email" className={styles["input-email-clave"]} placeholder="Correo" />
                        <br />
                        <input type="password" id="clave" className={styles["input-email-clave"]} placeholder="Contraseña" />
                        <br />
                        <button
                        type="submit"
                        className={styles["ingresar"]}
                        onClick={handleSingInCorreo}>Ingresar</button>
                    </form>
                </div>

                <div className={styles["form-ingreso-width-height"]}>
                    <button
                        type="submit"
                        className={styles["external-buttons"]}
                        onClick={handleSingIn}><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className={styles["img-buttons-size"]} />
                        Ingresar con Google
                    </button>
                    <br />
                    <Link to="/Registro" className={styles["registro"]}>Registrate</Link>
                </div>
            </div>
        </div>
    );
}