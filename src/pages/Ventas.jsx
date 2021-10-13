import { RegistroProducto } from "./RegistroProducto";
import { RegistroVenta } from "./RegistroVenta";

export function Ventas(){
    return (
        <div>
            <RegistroProducto />
            <RegistroVenta/>
        </div>

    );
}