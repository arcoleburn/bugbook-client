

const Today = () => {

    const now= new Date()

console.log(now)
    return(
        now.toDateString()
    )    
}
export default Today