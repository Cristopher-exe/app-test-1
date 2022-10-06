import React from 'react'

    
    interface Persona {
        nombreCompleto: string,
        edad: number,
        direccion: {
            pais: string,
            estado: string,
            ciudad: string,
            calle: string,
            numero: number
        }
    }

    interface Direccion {
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }

 
export const ObjetosLiterales = () => {    
    
    const persona: Persona = {
        nombreCompleto: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle: 'Conocido',
            numero: 533
        }
    }
    
    return (
        <div>
            <h3>Objetos Literales</h3>
        </div>
    )
}