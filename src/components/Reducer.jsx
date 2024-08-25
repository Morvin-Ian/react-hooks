import React, { useReducer } from 'react'

const initialState = {
    showText: false,
    changeStyle:false
}

const actionTypes = {
    HIDE_TEXT:'HIDE_TEXT',
    SHOW_TEXT:'SHOW_TEXT',
    CHANGE_STYLE:'CHANGE_STYLE'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.HIDE_TEXT:
            return {
                ...state,
                showText:false
            };
        case actionTypes.SHOW_TEXT:
            return {
                ...state,
                showText:true
            };
        case actionTypes.CHANGE_STYLE:
            return {
                ...state,
                changeStyle:!state.changeStyle
            };
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        { state?.showText ? <h2 style={{color:state?.changeStyle ? 'red' : 'black'}}>UseReducer Functionality</h2> : null
        }
        <button onClick={() => dispatch({type:actionTypes.HIDE_TEXT})}>Hide Text</button>
        <button onClick={() => dispatch({type:actionTypes.SHOW_TEXT})}>Show Text</button>
        <button onClick={() => dispatch({type:actionTypes.CHANGE_STYLE})}>Change Text Style</button>
    </div>
  )
}

export default Reducer