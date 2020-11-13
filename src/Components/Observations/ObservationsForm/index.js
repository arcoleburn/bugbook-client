import { useState } from "react"

const ObsForm = (props) => {

const [input, setInput] = useState('')    


const onChange =(e) => {setInput(e.target.value)}

const onSubmitForm = (e) => {
    e.preventDefault()
    props.onSubmit(input)
    setInput('')
}
    return(
        <form >
            <label htmlFor='entry'>The bug {props.firstName || 'John'}...</label>
            <input value={input} onChange={onChange} type='text' id='entry'/>
            <button onClick={onSubmitForm}> Add Observation</button>
        </form>
    )
}

export default ObsForm
