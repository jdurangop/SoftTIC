import { Link } from "react-router-dom";
import styles from "../css/Style-Portada.module.css"
import { signUsuarioGoogle, signUsuarioCorreo } from "../config/firebase";





export function PortadaLogin() {

    const handleSingIn = async (e) => {
        e.preventDefault();
        await signUsuarioGoogle();
    };

    const handleSingInCorreo = async (e) => {
        e.preventDefault();
        const correo = document.getElementById("email");
        const clave = document.getElementById("clave");

        const res = await signUsuarioCorreo(correo.value, clave.value);
        if (res === 0) {
            alert("Correo o contraseña incorrectos")
        }

    };




    return (
        <>
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
                        <p>Bienvenido</p>
                        <form onSubmit={(e) => e.preventDefault()} className={styles["login-form"]}>
                            <input type="email" id="email" className={styles["input-email-clave"]} placeholder="Correo" />
                            <br />
                            <input type="password" id="clave" className={styles["input-email-clave"]} placeholder="Contraseña" />
                            <br />
                            <button
                                type="submit"
                                className={styles["ingresar"]}
                                onSubmit={handleSingInCorreo}>Ingresar</button>
                        </form>
                    </div>

                    <div className={styles["form-ingreso-width-height"]}>
                        <button
                            type="submit"
                            className={styles["external-buttons"]}
                            onClick={handleSingIn}
                        ><img
                                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                                alt="Google"
                                className={styles["img-buttons-size"]}
                            />Ingresar con Google
                        </button>
                        <br />
                        <Link to="/Registro" className={styles["registro"]}>Registrate</Link>
                    </div>
                </div>
            </div>
        </>
    );
}