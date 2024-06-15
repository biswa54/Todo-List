import React from 'react'

function InputContainer({ value , onChange , onClick }) {
  return (
    <div>
       <div className="header">
        <input type="text" value={value} onChange={onChange} ></input>
        <button onClick={onClick}>+</button>
      </div>

    </div>
  )
}

export default InputContainer
