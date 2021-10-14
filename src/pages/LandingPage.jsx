import { Link } from "react-router-dom";
import styleHome from "../css/StylesHome.module.css"

export function LandingPage() {
    return (
        <div className={styleHome["menu-box"]}>
            <ul className={styleHome["ul-box"]}>
                <li className={styleHome["li-box"]}>
                    <Link className={styleHome["li-Link"]} to="/users">Usuarios</Link>
                </li>
                <li className={styleHome["li-box"]}>
                    <Link className={styleHome["li-Link"]} to="/sales">Ventas</Link>
                </li>
                <li className={styleHome["li-box"]}>
                    <Link className={styleHome["li-Link"]} to="/products">Productos</Link>
                </li>
            </ul>
        </div>
    );
}