import React from 'react'

import {Turmas} from './Turmas'

export const Curso = ({nome, turmas}) => {

    return (
        <>
            <div>{nome}</div>
            {turmas.length > 0 && <Turmas turmas={turmas}/>}
            {turmas.length === 0 && <div>Não possui turmas</div>}
        </>
    )
}


