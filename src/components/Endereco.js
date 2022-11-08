import React, {useEffect, useMemo, useState} from 'react'

export const Endereco = () => {
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])
    const [loadingEstado, setLoadingEstado] = useState(true)
    const [loadingCidade, setLoadingCidade] = useState(true)

    const handleEstado = ({target: {value}}) =>setEstado(value)

    const handleCidade = ({target: {value}}) =>setCidade(value)

    const labelEstado = useMemo(() => loadingEstado ? 'Aguarde...' : 'Selecione', [loadingEstado])

    const labelCidade = useMemo(() => loadingCidade ? 'Aguarde...' : 'Selecione', [loadingCidade])

    useEffect(() => {
        const loadEstados = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)

            const data = await response.json()
            setEstados(data)
            //setTimeout(() => setLoadingEstado(false), 1000)
            setLoadingEstado(false)
            
        }
        loadEstados()
    }, [])

    useEffect(() => {
        setLoadingCidade(true)
        const loadCidades = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`)

            const data = await response.json()
            setCidades(data)
            //setTimeout(() => setLoadingCidade(false), 1000)
            setLoadingCidade(false)
        }
        if (estado) loadCidades()
    }, [estado])

    return (
        <div>
            <select disabled={loadingEstado} value={estado} onChange={handleEstado}>
                <option value="">{labelEstado}</option>
                {estados.map(({sigla, nome}) => (
                    <option key={sigla} value={sigla}>
                        {nome}
                    </option>
                ))}
            </select>
            <select disabled={loadingCidade} value={cidade} onChange={handleCidade}>
                <option value="">{labelCidade}</option>
                {cidades.map(({id, nome}) => (
                    <option key={id} value={id}>
                        {nome}
                    </option>
                ))}
            </select>
        </div>
    )
}

