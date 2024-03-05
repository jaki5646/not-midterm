import React, { useState } from 'react'

const Input = ({ data, onWork }) => {
    const [dataRes, setDataRes] = useState(data.checked)
    const onChange = () => {
        setDataRes(!dataRes)
        onWork(data);
    }
  return (
    <input type="checkbox" checked={dataRes} onChange={onChange}/>
  )
}

export default Input