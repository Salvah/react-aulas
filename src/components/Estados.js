import React, {useEffect, useState} from 'react'

import { Select } from './Select'

export const Estados = ({estado, onChange}) => {
    const [loading, setLoading] = useState(true)
    const [estados, setEstados] = useState([])

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
            const data = await response.json()
            console.log(data)
            setEstados(data.map(({sigla, nome}) => ({id:sigla, nome})))
            //setTimeout(() => setLoading(false), 1000)
            setLoading(false)
        }
        load()
    }, [])
    return (
        <Select name="estado" disabled={loading} value={estado} onChange={onChange} options={estados}/>
    )
}