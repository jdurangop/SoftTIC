import { Link } from "react-router-dom";
import styleHome from "../css/StylesHome.module.css"

export function LandingPage() {
    return (
        <div className={styleHome["menu-box"]}>
            <ul className={styleHome["ul-box"]}>
                <Link className={styleHome["li-Link"]} to="/users">
                    <li className={styleHome["li-box"]}>
                        Usuarios
                    </li>
                </Link>
                <Link className={styleHome["li-Link"]} to="/sales">
                    <li className={styleHome["li-box"]}>
                        Ventas
                    </li>
                </Link>
                <Link className={styleHome["li-Link"]} to="/products">
                    <li className={styleHome["li-box"]}>
                        Productos
                    </li>
                </Link>
            </ul>
        </div>
    );
}