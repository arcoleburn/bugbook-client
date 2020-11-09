
const ObsForm = (props) => {


    return(
        <form>
            <label htmlFor='entry'>The bug {props.name || 'John'}...</label>
            <input type='text' id='entry'/>
            <button type='submit'> Add Observation</button>
        </form>
    )
}

export default ObsForm
