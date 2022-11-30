import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const Exemplo = () => {
    const [loading, setLoading] = useState(true)
    const [texto, setTexto] = useState("")
    const [itens, setItens] = useState([])
    const [alterando, setAlterando] = useState(null)

    const disabled = texto.length === 0
    
    const handleChange = ({target}) => setTexto(target.value)
    
    const add = async (e) =>{
        e.preventDefault()
        var params = new URLSearchParams();
        params.append('name', texto);
        setTexto("")
        const r = await axios.post(
                `http://localhost/backend/index.php`, 
                params
        )
        setItens([...itens, r.data])
    }

    const remove = async (id) => {
        const r = await axios.get(
            `http://localhost/backend/apagar.php?id=${id}`
        )
        //setItens(itens.filter(item => item.id !== r.data))
        setItens(itens.filter(({id}) => id !== r.data))   
    }

    const alterar = (id) => setAlterando(id)

    useEffect(() => {
        const load = async () => {
            setLoading(true)
            const r = await axios.get(
                'http://localhost/backend/lista.php')

            setItens(r.data)
            setLoading(false)
        }

         load()
    }, [])

    console.log(alterando)
    return (
        <div>
            <h2>Lista de Compras</h2>
            
                <input name="texto" value={texto} onChange={handleChange} type="text"/>
                <button disabled={disabled} onClick={add} type="button">+</button>
            
            {loading && <p>Aguarde...</p>}
            <ul>
                {itens.map(item => <li key={item.id}>
                    {alterando === item.id && (
                        <>
                        <input type="text"/>
                        <button onClick={()=>alterar(null)} type="button">Cancelar</button>                    
                        </>
                    )}
                    {alterando !== item.id && (
                        <>
    <span>{item.nome}</span>
    <button onClick={()=>remove(item.id)} type="button">-</button>
    <button onClick={()=>alterar(item.id)} type="button">Alterar</button>
                        </>
                    )}
                    
                </li>)}
                {itens.length === 0 && <li>Lista vazia!</li>}
            </ul>
            
        </div>
    )
}