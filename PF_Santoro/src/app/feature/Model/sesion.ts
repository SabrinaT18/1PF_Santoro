import { Usuario } from "./Usuario";

export interface sesion {
    sesionActiva: boolean;
    usuario?: Usuario;
}