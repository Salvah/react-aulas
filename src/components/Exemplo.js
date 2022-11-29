import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const Exemplo = () => {
    const [loading, setLoading] = useState(true)
    const [texto, setTexto] = useState("")
    const [itens, setItens] = useState([])

    const disabled = texto.length === 0
    
    const handleChange = ({target}) => setTexto(target.value)
    
    const remove = item => setItens(
        itens.filter(i => i !== item)
    )

    const add = async (e) =>{
        e.preventDefault()
        setTexto("")
    
    }

    useEffect(() => {
        const load = async () => {
            const r = await axios.get(
                'http://localhost/backend/lista.php')

            setItens(r.data)
            
            setLoading(false)
        }

        load()
    }, [])

    console.log(loading)
    return (
        <div>
            <h2>Lista de Compras</h2>
            
                <input name="texto" value={texto} onChange={handleChange} type="text"/>
                <button disabled={disabled} onClick={add} type="button">+</button>
            
            {loading && <p>Aguarde...</p>}
            {!loading && (<ul>
                {itens.map(item => <li key={item.id}>
                    <span>{item.nome}</span>
                    <button onClick={()=>remove(item.id)} type="button">-</button>
                </li>)}
            </ul>)}
            
        </div>
    )
}