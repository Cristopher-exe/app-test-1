import React from 'react'
export const TiposBasicos = () => {
let FicIdNombre: string | number = "Frank";
FicIdNombre = 706;
const crisAlias: string = "Cris";
const FicNombre: string = "Cristopher";
const FicApellidos: string = "Canales Almendares"
const FicNumControl: number = 706;
const FicNumControl2 = 1074;
const FicFechaReg: Date = new Date();
let FicExperiencia = 20;
let FicActivo: boolean = true;
let FicLibros = [];
FicLibros.push(706);
FicLibros.push(true);
FicLibros.push('El principito');
    return (
        <>
          <h3>Tipos Básicos</h3> 
          Alias: {crisAlias}
          <br />
            Nombre: {FicNombre},
            <br />
            Apellido: {FicApellidos},
            <br />
            No. Control: {FicNumControl},
            <br />
            No. Control 2: {FicNumControl2},
            <br />
                {FicFechaReg.toString()},
            <br />
            Años de experiencia: {FicExperiencia},
            <br />
            Estatus: {(FicActivo) ? 'Activo' : 'No Activo'}
            <br />
            Libros: {FicLibros[0]}, 
                    {(FicLibros[1]) ? 'Activo' : 'No Activo'}, 
                    {FicLibros[2]}
          
        </>
    )
}
