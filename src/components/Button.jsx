import React, { useContext } from 'react'
import { GlobalContext } from '../context/context';

const Button = () => {
    const {theme, setTheme} = useContext(GlobalContext)

    const toggelTheme = () =>{
        if(theme == 'light')
            setTheme('dark') 
        else
            setTheme('light')
    }

  return (
    <div>
        <button onClick={toggelTheme}>Click Here</button>
    </div>
  )
}

export default Button;