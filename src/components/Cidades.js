import React, { useEffect, useState } from 'react'
import { Select } from './Select'

export const Cidades = ({cidade, estado, onChange}) => {
    const [loading, setLoading] = useState(true)
    const [cidades, setCidades] = useState([])

    useEffect(() => {
        setLoading(true)
        const load = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`)
            const data = await response.json()
            setCidades(data)
            //setTimeout(() => setLoading(false), 1000)
            setLoading(false)
        }
        if (estado) load()
        else setCidades([])
    }, [estado])
    return (
        <Select name="cidade" value={cidade} disabled={loading} onChange={onChange} options={cidades}/>
    )
}