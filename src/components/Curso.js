import React from 'react'

import {Turmas} from './Turmas'

export const Curso = ({id, nome, turmas, remove}) => {
    return (
        <>
            <div>
                <span>{nome} -  {id}</span>
                <button onClick={() => remove(id)}>Remover</button>
            </div>
            {turmas.length > 0 && <Turmas turmas={turmas}/>}
            {turmas.length === 0 && <div>Não possui turmas</div>}
        </>
    )
}


