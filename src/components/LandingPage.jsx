import { Link } from "react-router-dom";
import styleHome from "../css/StylesHome.module.css"

export function LandingPage({ Rol }) {
    
        return (
            <div className={styleHome["menu-box"]}>
                {

                    <ul className={styleHome["ul-box"]}>
                        {Rol !== 1 ? null :
                            <Link className={styleHome["li-Link"]} to="/users">
                                <li className={styleHome["li-box"]}>
                                    Usuarios
                                </li>
                            </Link>}

                        {Rol !== 0 ? 
                            <Link className={styleHome["li-Link"]} to="/sales">
                                <li className={styleHome["li-box"]}>
                                    Ventas
                                </li>
                            </Link> : null}
                        {Rol !== 1 ? null :
                            <Link className={styleHome["li-Link"]} to="/products">
                                <li className={styleHome["li-box"]}>
                                    Productos
                                </li>
                            </Link>}

                        {Rol === 0 ? 
                            <Link className={styleHome["li-Link"]} to="/ComReg">
                                <li className={styleHome["li-box"]}>
                                    Completar registro
                                </li>
                            </Link> : null}
                    </ul>
                }
            </div>

        );
    }
