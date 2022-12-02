import React,{createContext, useState} from 'react'

const Translate = (props) => {
  const [state, setState] = useState(false)

  return (
    <div>
        <TranslateContext.Provider value={[state, setState]}>
            {props.children}
        </TranslateContext.Provider>
    </div>
  )
}

export default Translate;
export const TranslateContext = createContext();