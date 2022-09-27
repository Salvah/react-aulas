import React from 'react';
import ReactDOM from 'react-dom/client';

import {Curso } from './components'

const cursos = [
  {nome: 'Técnico em Informática', turmas: ['1º INFO']},
  {nome: 'Técnico em Meio Ambiente', turmas: []},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {cursos.map(({nome, turmas}) => (
      <Curso key={nome} nome={nome} turmas={turmas}/>
    ))}
    {cursos.map(curso => (
      <Curso key={curso.nome} {...curso}/>
    ))}
  </React.StrictMode>
);