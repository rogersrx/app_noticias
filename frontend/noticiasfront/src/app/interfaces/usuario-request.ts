export interface Usuario {
    nombre:        string;
    nombreUsuario: string;
    email:         string;
    password:      string;
    roles:         string[];
}

export interface UsuarioLogin {
    nombreUsuario: string;
    password: string;
}