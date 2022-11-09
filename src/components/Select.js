import React from 'react'

export const Select = ({name, value, onChange, options, disabled=false}) => {
    const label = disabled ? 'Aguarde...' : 'Selecione'
    return (
        <select name={name} disabled={disabled} value={value} onChange={onChange}>
            <option value="">{label}</option>
            {options.map(({id, nome})=><option key={id} value={id}>{nome}</option>)}
        </select>
    )
}