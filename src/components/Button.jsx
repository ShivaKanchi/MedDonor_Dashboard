import React from 'react'

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ color, bgColor, size, text, borderRadius, icon, width, bgHoverColor }) => {

    const { setIsClicked, intialState } = useStateContext();

    return (
        <button
            type='button'
            onClick={() => setIsClicked(intialState)}
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>
            {icon} {text}
        </button>
    )
}

export default Button