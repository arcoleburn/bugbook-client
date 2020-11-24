import { useState } from "react"
import { ObsFormWrapper } from "./ObsForm.styles"

const ObsForm = (props) => {
const [input, setInput] = useState('')    

const onChange =(e) => {setInput(e.target.value)}

const onSubmitForm = (e) => {
    e.preventDefault()
    props.onSubmit(input)
    setInput('')
}
    return(
        <ObsFormWrapper >
            <label htmlFor='entry'>The bug {props.firstName || 'John'}...</label>
            <input value={input} onChange={onChange} type='text' id='entry'/>
            <button disabled={!input} onClick={onSubmitForm}> Add</button>
        </ObsFormWrapper>
    )
}

export default ObsForm
