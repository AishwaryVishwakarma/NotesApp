import React from 'react'
import Option from './Option'

const Select = (props) => {
  return (
    <select
        className={props.className}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
    >
        <Option 
            value={props.value}
            options={props.options}
        />
    </select>
    )
}

export default Select