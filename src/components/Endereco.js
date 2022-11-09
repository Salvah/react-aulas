import React, {useState} from 'react'
import { Cidades } from './Cidades'
import { Estados } from './Estados'

export const Endereco = () => {
    const [state, setState] = useState({estado: '', cidade: ''})

    const handleState = ({target: {name, value}}) =>
        setState({...state, [name]:value})

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <Estados estado={state.estado} onChange={handleState}/>
            <Cidades cidade={state.cidade} estado={state.estado} onChange={handleState}/>
        </div>
    )
}