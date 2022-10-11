import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import {Curso} from './Curso'

export const Cursos = () => {
    const [cursos, setCursos] = useState([])

    const addCurso = () => 
        setCursos([...cursos, {id: uuidv4(), nome: 'Novo Curso', turmas:[]}])

    const removeCurso = (id) => 
        setCursos(cursos.filter(curso => curso.id !== id))

    const removeAll = () => setCursos([])

    return (
        <div>
            <button onClick={addCurso}>Adicionar curso</button>
            <button onClick={removeAll}>Remover todos</button>
        {cursos.map(curso => (
            <Curso key={curso.id} {...curso} remove={removeCurso}/>
        ))}
        </div>
    )
}
