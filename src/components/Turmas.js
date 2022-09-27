import React from 'react'

const Turma = ({nome}) => {
    return <li>{nome}</li>
}

export const Turmas = ({turmas}) => {
    return turmas.map(turma => (
        <Turma key={turma} nome={turma}/>
    ))
}