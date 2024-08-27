import React from 'react'

const CommonInput = ({ data, value, onChange }) => {
    return (
        <div>
            <label htmlFor={data?.name}>{data?.label}</label>
            <input 
                type={data?.type || "text"} 
                name={data?.name} 
                id={data?.id} 
                placeholder={data?.placeholder || 'Enter vaue here'} 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default CommonInput;