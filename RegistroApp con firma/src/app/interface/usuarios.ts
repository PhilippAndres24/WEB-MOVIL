export interface usuarios {
    alumId:string,
    nombreAlumno:string,
    userId:string,
    clave:string
}

export interface carrera{
    id:string,
    alumId: string,
    nomcarrera: string

}

export interface qr{
    idClase:string;
    idAsignatura:string;
    seccion:string;
    asignatura:string;
    docente:string;
    correo:string;
}
